<template>
    <div class="h-full bg-gray-100">
        <div class="relative h-full">
            <nav class="fixed left-0 inset-y-0 w-32 bg-gray-800">
                <div class="flex flex-col h-full">
                    <NuxtLink
                        v-for="(tab, index) in tabs"
                        :key="index"
                        :to="tab.to"
                        class="flex flex-col space-y-2 items-center rounded py-8 text-center text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        :class="[currentTab === tab.slug ? 'text-white bg-gray-700' : '']"
                    >
                        <component :is="tab.icon" />
                        <p>{{ tab.title }}</p>
                    </NuxtLink>
                </div>
            </nav>

            <!-- Page Content -->
            <div class="pl-32">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BankNotes from '~/components/icons/BankNotes.vue';
import DocumentCurrencyDollar from '~/components/icons/DocumentCurrencyDollar.vue';
import ArchiveBox from '~/components/icons/ArchiveBox.vue';
import Cog6Tooth from '~/components/icons/Cog6Tooth.vue';

const { $scannerDevice } = useNuxtApp();

// Tabs and current tab
const currentTab = ref('');
const tabs = [
    {
        title: 'Caisse',
        icon: BankNotes,
        to: '/app/cash-register',
        slug: 'cash-register',
    },
    {
        title: 'Tickets',
        icon: DocumentCurrencyDollar,
        to: '/app/tickets',
        slug: 'tickets',
    },
    {
        title: 'Stock',
        icon: ArchiveBox,
        to: '/app/stock',
        slug: 'stock',
    },
    {
        title: 'Paramètres',
        icon: Cog6Tooth,
        to: '/app/settings',
        slug: 'settings',
    },
];

// Set the current tab based on the URL changes
watch(() => useRoute().path, (newPath) => {
    const matchedTab = tabs.find((tab) => newPath.includes(tab.slug));

    if (matchedTab) {
        currentTab.value = matchedTab.slug;
    }
}, { immediate: true });

/**
 * Handle the scanned barcode for the Cash Register tab.
 * Add the scanned article to the current list.
 * @param {string} barcode The scanned barcode.
 */
const handleCashRegisterScan = (barcode: string) => {
    useScannedArticlesStore().addScannedArticle(barcode, 1);
};

/**
 * Handle the scanned barcode for the Stock tab.
 * Navigate to the add/update article page.
 * @param {string} barcode The scanned barcode.
 */
const handleStockScan = (barcode: string) => {
    navigateTo(`/app/stock/${barcode}`);
};

// Associate a tab to a callback function when a barcode is scanned
const barcodeHandlers: Record<string, (barcode: string) => void> = {
    'cash-register': handleCashRegisterScan,
    'stock': handleStockScan,
};

// Execute a function based on the current tab when a barcode is scanned
watch(() => $scannerDevice.lastScannedBarcode, (newBarcode) => {
    if (newBarcode !== null) {
        // Execute a specific function based on the current tab
        if (currentTab.value in barcodeHandlers) {
            barcodeHandlers[currentTab.value](newBarcode);
        }

        // Reset last scanned barcode
        $scannerDevice.lastScannedBarcode = null;
    }
});
</script>
