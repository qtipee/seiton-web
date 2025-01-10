<template>
    <div class="actions-container">
        <button
        class="action-button"
        :disabled="globalActionsDisabled"
        @click="handleCashPayment"
        >
            <img src="" alt="Cash Payment" />
        </button>
        <button
        class="action-button"
        :disabled="globalActionsDisabled"
        @click="handleTerminalPayment"
        >
            <img src="" alt="Card Payment" />
        </button>
        <button
        class="action-button"
        :disabled="globalActionsDisabled"
        @click="addTicket"
        >
            <img src="" alt="Add Ticket" />
        </button>
        <button
        class="action-button"
        :disabled="globalActionsDisabled"
        @click="showWarningDeleteTicket = true"
        >
            <img src="" alt="Delete Ticket" />
        </button>

        <!--Modal v-if="showSheetCashPayment" @close="showSheetCashPayment = false">
            <CashPaymentSheet
            :amount="scannedArticlesStore.currentTicket.totalPrice"
            @save="validateList"
            />
        </Modal>

        <Modal v-if="showSheetTerminalPayment" @close="showSheetTerminalPayment = false">
            <CardPaymentSheet
            :amount="scannedArticlesStore.currentTicket.totalPrice"
            @save="validateList"
            />
        </Modal>

        <Modal v-if="showWarningDeleteTicket" @close="showWarningDeleteTicket = false">
            <WarningModal
            message="Supprimer le Ticket ?"
            @confirm="deleteCurrentGroup"
            />
        </Modal-->
    </div>
</template>

<script setup lang="ts">
const scannedArticlesStore = useScannedArticlesStore();
const showSheetCashPayment = ref(false);
const showSheetTerminalPayment = ref(false);
const showWarningDeleteTicket = ref(false);
</script>

<style scoped>
.actions-container {
    display: flex;
    gap: 10px;
}

.action-button {
    background: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
}

.action-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>  