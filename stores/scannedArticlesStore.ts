import { defineStore } from 'pinia';
import { PaymentMethod } from '~/enums/paymentMethod';
import type { Article } from '~/interfaces/article';
import type { ScannedArticle } from '~/interfaces/scannedArticle';
import type { Ticket } from '~/interfaces/ticket';
import { useArticleService } from '~/composables/useArticleService';
import { useTicketService } from '~/composables/useTicketService';

export const useScannedArticlesStore = defineStore('scannedArticles', () => {
    // Dependencies (services)
    //const { articles, setArticles, getArticle, addArticle } = useArticleService();
    //const { tickets, setTickets, createNewTicket, getTicketById } = useTicketService();
    
    // Scanner device
    const { $scannerDevice } = useNuxtApp();

    // State
    // Latest validated ticket id
    const validatedTicketId = ref<string | null>(null);
    // List of tickets in creation
    const ticketsOpen = reactive<Ticket[]>([
        {
            scannedArticles: [],
            rawDiscount: 0.0,
            percentageDiscount: 0.0,
            totalPrice: 0.0,
            paymentMethod: PaymentMethod.UNDEFINED,
        },
    ]);
    // Selected ticket
    const activeTicketIndex = ref(0);

    // Getters (computed properties)
    const currentTicket = computed(() => ticketsOpen[activeTicketIndex.value]);

    // Actions (methods)
    const addScannedArticle = async (articleId: string, quantity: number) => {

    }

    const updateArticleQuantity = (articleId: string, quantity: number) => {

    }

    const addNewTicket = () => {

    }

    const deleteCurrentTicket = () => {

    }

    const validateList = async () => {

    }

    const updateDiscounts = (rawDiscount: number, percentageDiscount: number) => {

    }

    const setPaymentMethod = (paymentMethod: PaymentMethod) => {

    }

    const recalculateTotal = () => {

    }

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

    return {
        validatedTicketId,
        activeTicketIndex,
        currentTicket,
        addScannedArticle,
        updateArticleQuantity,
        addNewTicket,
        deleteCurrentTicket,
        validateList,
        updateDiscounts,
        setPaymentMethod,
    };
});
