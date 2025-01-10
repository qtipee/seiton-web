<template>
    <div class="discounts-container">
        <div class="discounts-header">
            <button @click="showSheetUpdateDiscounts = true" class="edit-discounts-button">
            Modifier
            </button>
        </div>

        <div class="discount-details">
            <div class="discount-item">
            <span>Rabais en CHF :</span>
            <span>{{ rawDiscountText }}</span>
            </div>
            <div class="discount-item">
            <span>Rabais en % :</span>
            <span>{{ percentageDiscountText }}</span>
            </div>
        </div>

        <div class="total-price">
            <span>Total :</span>
            <span>{{ totalPriceText }}</span>
        </div>

        <!--Modal v-if="showSheetUpdateDiscounts" @close="showSheetUpdateDiscounts = false">
            <UpdateDiscountSheet
            @save="updateDiscounts"
            />
        </Modal-->
    </div>
</template>

<script setup lang="ts">
const scannedArticlesStore = useScannedArticlesStore();
const showSheetUpdateDiscounts = ref(false);

const rawDiscountText = computed(() =>
    // `- ${scannedArticlesStore.currentTicket.rawDiscount.toFixed(2)} CHF`
);

const percentageDiscountText = computed(() =>
    // `- ${scannedArticlesStore.currentTicket.percentageDiscount.toFixed(2)} %`
);

const totalPriceText = computed(() =>
    // `${scannedArticlesStore.currentTicket.totalPrice.toFixed(2)} CHF`
);

const updateDiscounts = (rawDiscount: number, percentageDiscount: number) => {
    // scannedArticlesStore.updateDiscounts(rawDiscount, percentageDiscount);
    // showSheetUpdateDiscounts.value = false;
};
</script>

<style scoped>
.discounts-container {
    padding: 16px;
}

.discounts-header {
    display: flex;
    justify-content: flex-end;
}

.edit-discounts-button {
    background: none;
    border: none;
    color: var(--accent-color);
    cursor: pointer;
}

.discount-details {
    margin-top: 16px;
}

.discount-item {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
}

.total-price {
    margin-top: 16px;
    font-weight: bold;
    font-size: 1.25rem;
    display: flex;
    justify-content: space-between;
}
</style>
