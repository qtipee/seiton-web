<template>
    <div class="fixed left-32 right-0 bottom-0">
        <!-- Global discounts and total price -->
        <div class="flex flex-col space-y-2 px-4 py-2 sm:px-6 lg:px-8">

            <!-- Global discount in cash (raw) -->
            <div class="flex justify-between items-center">
                <h3 class="text-sm font-semibold">Rabais en CHF :</h3>
                <button
                    class="text-sm font-semibold"
                    @click="modalDiscountsOpen = true"
                >
                    -{{ scannedArticlesStore.currentTicket.rawDiscount.toFixed(2) }} CHF
                </button>
            </div>

            <!-- Global discount in percentage -->
            <div class="flex justify-between items-center">
                <h3 class="text-sm font-semibold">Rabais en % :</h3>
                <button
                    class="text-sm font-semibold"
                    @click="modalDiscountsOpen = true"
                >
                    -{{ scannedArticlesStore.currentTicket.percentageDiscount.toFixed(2) }}%
                </button>
            </div>

            <!-- Total price -->
            <div class="flex justify-between items-center pt-2">
                <h3 class="font-semibold">Prix total :</h3>
                <span class="font-semibold">
                    {{ scannedArticlesStore.currentTicket.totalPrice.toFixed(2) }} CHF
                </span>
            </div>
        </div>

        <!-- Actions buttons (payments, new ticket, delete ticket, ...) -->
        <div class="flex items-center space-x-8 px-4 py-2 sm:px-6 lg:px-8">
            <div class="flex w-4/5 space-x-4">
                <!-- Cash payment button -->
                <button
                    class="flex-1 inline-flex items-center justify-center h-12 rounded text-white bg-primary-500 hover:bg-primary-700 duration-200"
                    @click="modalCashPaymentOpen = true"
                >
                    <IconsBankNotes class="w-6 h-6" />
                </button>
                <!-- Terminal payment button -->
                <button
                    class="flex-1 inline-flex items-center justify-center h-12 rounded text-white bg-primary-500 hover:bg-primary-700 duration-200"
                    @click="modalTerminalPaymentOpen = true"
                >
                    <IconsCreditCard class="w-6 h-6" />
                </button>
            </div>
            <div class="flex w-1/5 space-x-4">
                <!-- Add article manually button -->
                <button
                    class="flex-1 inline-flex items-center justify-center h-12 rounded text-white bg-primary-500 hover:bg-primary-700 duration-200"
                    @click="modalArticleAddOpen = true"
                >
                    <IconsPlusCircle class="w-6 h-6" />
                </button>
                <!-- Delete ticket button -->
                <button
                    class="flex-1 inline-flex items-center justify-center h-12 rounded text-red-600 bg-white border-2 border-red-600 hover:text-white hover:bg-red-600 duration-200"
                    @click="modalDeleteTicketOpen = true"
                >
                    <IconsTrash class="w-6 h-6" />
                </button>
            </div>
        </div>
    </div>

    <!-- Modals -->
    <!-- Update discounts modal -->
    <Modal
        v-model:open="modalDiscountsOpen"
        title="Appliquer des Rabais"
        approve-text="Valider"
        @accepted="validateDiscounts"
    >
        <div class="flex flex-col space-y-4">
            <!-- Raw Discount -->
            <div class="flex flex-col space-y-2">
                <label for="raw-discount">
                    Rabais en CHF :
                </label>
                <input type="number" v-model="rawDiscount" name="raw-discount" class="p-2 border rounded" />
            </div>

            <!-- Percentage Discount -->
            <div class="flex flex-col space-y-2">
                <label for="percentage-discount">
                    Rabais en % :
                </label>
                <input type="number" v-model="percentageDiscount" name="percentage-discount" class="p-2 border rounded" />
            </div>
            
            <p class="italic text-gray-500">
                Ces rabais sont appliqués sur le total de tous les articles. Le rabais en % est appliqué après le rabais brut en CHF.
            </p>
        </div>
    </Modal>

    <!-- Cash payment modal -->
    <Modal
        v-model:open="modalCashPaymentOpen"
        title="Paiement par Cash"
        approve-text="Valider"
        @accepted="validateCashPayment"
    >
        <div class="flex flex-col space-y-4">
            <!-- Amount to pay -->
            <div class="flex flex-col space-y-2">
                <label>
                    Montant à payer : {{ scannedArticlesStore.currentTicket.totalPrice.toFixed(2) }} CHF
                </label>
            </div>

            <!-- Amount given -->
            <div class="flex flex-col space-y-2">
                <label for="given-amount">
                    Montant reçu :
                </label>
                <input type="number" v-model="givenAmount" name="given-amount" class="p-2 border rounded" />
            </div>

            <!-- Amount to return -->
            <div class="flex flex-col space-y-2">
                <label>
                    Retour : {{ returnAmount.toFixed(2) }} CHF
                </label>
            </div>

            <p class="italic text-gray-500">
                Valider le paiement enregistre le ticket dans la base de donnée puis le supprime ici.
            </p>
        </div>
    </Modal>

    <!-- Terminal payment modal -->
    <Modal
        v-model:open="modalTerminalPaymentOpen"
        title="Paiement par Terminal"
        approve-text="Valider"
        @accepted="validateTerminalPayment"
    >
        <div class="flex flex-col space-y-4">
            <!-- Amount to pay -->
            <div class="flex flex-col space-y-2">
                <label>
                    Montant à payer : {{ scannedArticlesStore.currentTicket.totalPrice.toFixed(2) }} CHF
                </label>
            </div>

            <p class="italic text-gray-500">
                Valider le paiement enregistre le ticket dans la base de donnée puis le supprime ici.
            </p>
        </div>
    </Modal>

    <!-- Manually add article -->
    <ModalArticleAdd
        :open="modalArticleAddOpen"
        @update:open="modalArticleAddOpen = $event"
    />

    <!-- Delete ticket modal -->
    <Modal
        v-model:open="modalDeleteTicketOpen"
        title="Supprimer le ticket ?"
        approve-text="Supprimer"
        :type="ModalType.ERROR"
        @accepted="deleteTicket"
    >
        <p class="italic text-gray-500">
            Il sera impossible de récupérer ce ticket après suppression.
        </p>
    </Modal>

    <!-- Send ticket by email modal -->
    <ModalTicketSendEmail
        :open="modalSendEmailOpen"
        :ticketId="scannedArticlesStore.validatedTicketId"
        @update:open="modalSendEmailOpen = $event"
    />
</template>

<script setup lang="ts">
import { ModalType } from '~/enums/modalType';
import { PaymentMethod } from '~/enums/paymentMethod';
import { useScannedArticlesStore } from '~/stores/scannedArticlesStore';

const scannedArticlesStore = useScannedArticlesStore();

const modalDiscountsOpen = ref(false);
const modalCashPaymentOpen = ref(false);
const modalTerminalPaymentOpen = ref(false);
const modalArticleAddOpen = ref(false);
const modalDeleteTicketOpen = ref(false);
const modalSendEmailOpen = ref(false);

/// GLOBAL DISCOUNTS ///
const rawDiscount = ref(0.0);
const percentageDiscount = ref(0.0);

/**
 * Apply global discounts if accepted.
 * @param accepted 
 */
const validateDiscounts = (accepted: boolean) => {
    if (accepted) {
        scannedArticlesStore.updateDiscounts(rawDiscount.value, percentageDiscount.value);
    }
};

/// CASH PAYMENT ///
// Cash amount received by the client
const givenAmount = ref(0);
// Cash amount to return to the client
const returnAmount = computed(() => {
    return Math.max(givenAmount.value - scannedArticlesStore.currentTicket.totalPrice, 0.0);
});

/**
 * Save the ticket to the database if accepted.
 * @param {boolean} accepted 
 */
const validateCashPayment = (accepted: boolean) => {
    if (accepted) {
        scannedArticlesStore.setPaymentMethod(PaymentMethod.CASH);
        scannedArticlesStore.validateTicket();
        modalSendEmailOpen.value = true;
    }
};

/// TERMINAL PAYMENT ///
const validateTerminalPayment = (accepted: boolean) => {
    if (accepted) {
        scannedArticlesStore.setPaymentMethod(PaymentMethod.TERMINAL);
        scannedArticlesStore.validateTicket();
        modalSendEmailOpen.value = true;
    }
};

/// DELETE TICKET ///
const deleteTicket = (accepted: boolean) => {
    if (accepted) {
        scannedArticlesStore.deleteCurrentTicket();
    }
};
</script>
