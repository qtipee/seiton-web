import { defineStore } from 'pinia';
import { useArticleService } from '~/composables/useArticleService';
import { useTicketService } from '~/composables/useTicketService';
import { PaymentMethod } from '~/enums/paymentMethod';
import type { ScannedArticle } from '~/interfaces/scannedArticle';
import type { Ticket } from '~/interfaces/ticket';

export const useScannedArticlesStore = defineStore('scannedArticles', () => {
    // Articles Store
    const articlesStore = useArticlesStore();

    // Dependencies (services)
    const { updateArticlesQuantity } = useArticleService();
    const { createTicket } = useTicketService();
    
    // Scanner device
    const { $scannerDevice } = useNuxtApp();

    /// STATE ///

    // List of tickets in creation
    const ticketsOpen = reactive<Ticket[]>(JSON.parse(localStorage.getItem('ticketsOpen') || '[]'));
    
    // Selected ticket index
    const activeTicketIndex = ref(parseInt(localStorage.getItem('activeTicketIndex') || '0'));

    // Latest validated ticket id
    const validatedTicketId = ref<string>('');

    /// GETTERS ///

    // Selected ticket
    const currentTicket = computed(() => ticketsOpen[activeTicketIndex.value]);

    /// ACTIONS ///

    /**
     * Add an article to the selected ticket.
     * @param {string} articleID
     * @param {number} quantity 
     */
    const addScannedArticle = async (articleID: string, quantity: number) => {
        if (!articleID) return;

        const current = currentTicket.value;
        const index = current.scannedArticles.findIndex(
            (scannedItem) => scannedItem.article.articleID === articleID
        );

        if (index !== -1) {
            // The ticket already contains the article: update the quantity
            current.scannedArticles[index].quantity += quantity;
        } else {
            // The ticket does not contain the article yet: add it
            const article = await articlesStore.getArticleById(articleID);

            if (article) {
                const scannedArticle: ScannedArticle = {  article, quantity, };
                current.scannedArticles.push(scannedArticle);
            } else {
                console.error(`Article not found: ${articleID}`);
            }
        }

        recalculateTotal();
    };

    /**
     * Update an article's quantity. If the quantity is set to 0,
     * it will remove the article from the list.
     * @param {string} articleID 
     * @param {number} quantity 
     */
    const updateArticleQuantity = (articleID: string, quantity: number) => {
        const current = currentTicket.value;
        const index = current.scannedArticles.findIndex(
            (scanned) => scanned.article.articleID === articleID
        );

        if (index !== -1) {
            if (quantity === 0) {
                // Remove the article from the ticket
                current.scannedArticles.splice(index, 1);
            } else {
                // Update the article's quantity
                current.scannedArticles[index].quantity = quantity;
            }

            recalculateTotal();
        }
    };

    /**
     * Select the given ticket.
     * @param {number} index 
     */
    const selectActiveTicket = (index: number) => {
        if (index >= 0 && index < ticketsOpen.length) {
            activeTicketIndex.value = index;
            localStorage.setItem('activeTicketIndex', String(activeTicketIndex.value));
        }
    };

    /**
     * Add a new ticket in parallel.
     */
    const addNewTicket = () => {
        // Max 6 tickets
        if (ticketsOpen.length >= 6) return;

        ticketsOpen.push({
            scannedArticles: [],
            rawDiscount: 0.0,
            percentageDiscount: 0.0,
            totalPrice: 0.0,
            paymentMethod: PaymentMethod.UNDEFINED,
        });

        // Select the latest ticket
        activeTicketIndex.value = ticketsOpen.length - 1;
    };

    /**
     * Delete the current ticket.
     */
    const deleteCurrentTicket = () => {
        if (ticketsOpen.length > 1) {
            // There is more than 1 ticket
            ticketsOpen.splice(activeTicketIndex.value, 1);
            activeTicketIndex.value = Math.min(activeTicketIndex.value, ticketsOpen.length - 1);
        } else {
            // Reset the single ticket
            ticketsOpen[0] = {
                scannedArticles: [],
                rawDiscount: 0.0,
                percentageDiscount: 0.0,
                totalPrice: 0.0,
                paymentMethod: PaymentMethod.UNDEFINED,
            };
            activeTicketIndex.value = 0;
        }

        saveToLocalStorage();
    };

    /**
     * Validate the current ticket and save it to the database.
     */
    const validateTicket = async () => {
        // Update the articles' quantities (stock deduction)
        const updatedArticles = currentTicket.value.scannedArticles.map((scannedItem) => {
            const updatedArticle = { ...scannedItem.article };
            updatedArticle.quantity -= scannedItem.quantity;
            return updatedArticle;
        });
        await updateArticlesQuantity(updatedArticles);

        // Create the ticket in the database
        const ticketId = await createTicket(currentTicket.value);
        validatedTicketId.value = ticketId ?? '';

        // Delete the ticket
        deleteCurrentTicket();
    };

    /**
     * Update the global discounts of the current ticket.
     * @param {number} rawDiscount 
     * @param {number} percentageDiscount 
     */
    const updateDiscounts = (rawDiscount: number, percentageDiscount: number) => {
        const current = currentTicket.value;
        current.rawDiscount = rawDiscount;
        current.percentageDiscount = percentageDiscount;

        recalculateTotal();
    };

    /**
     * Set the payment method of the current ticket.
     * @param {PaymentMethod} paymentMethod 
     */
    const setPaymentMethod = (paymentMethod: PaymentMethod) => {
        currentTicket.value.paymentMethod = paymentMethod;
    };

    /**
     * Calculate the current ticket total price.
     */
    const recalculateTotal = () => {
        const current = currentTicket.value;

        // Total price of all articles
        const subtotal = current.scannedArticles.reduce((total, scannedItem) => {
            const discountedPrice = scannedItem.article.unitPrice - (scannedItem.article.discount ?? 0.0);
            return total + discountedPrice * scannedItem.quantity;
        }, 0.0);

        // Apply raw discount
        let total = subtotal - current.rawDiscount;
        // Apply percentage discount
        total *= 1 - current.percentageDiscount / 100;

        current.totalPrice = Math.max(total, 0.0);

        saveToLocalStorage();
    };

    /**
     * Save ticketsOpen list to local storage.
     */
    const saveToLocalStorage = () => {
        localStorage.setItem('ticketsOpen', JSON.stringify(ticketsOpen));
    };

    // Watchers
    /*
    watch(
        () => $scannerDevice.barcodeScanned,
        (newScans) => {
            if (newScans.value.length > 0) {
                const lastScan = newScans.value.pop();
                if (lastScan) {
                    const [barcode, activeTab] = lastScan;
                    addScannedArticle(barcode, 1);
                }
            }
        },
        { deep: true }
    );
    */

    // Initialise the store with an empty ticket
    ticketsOpen.length === 0 && addNewTicket();

    return {
        validatedTicketId,
        ticketsOpen,
        activeTicketIndex,
        currentTicket,
        addScannedArticle,
        updateArticleQuantity,
        selectActiveTicket,
        addNewTicket,
        deleteCurrentTicket,
        validateTicket,
        updateDiscounts,
        setPaymentMethod,
    };
});
