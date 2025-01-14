<template>
    <header class="bg-white">
        <div class="flex justify-between items-center mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <h1 class="text-2xl font-bold">Caisse</h1>
            <IconsShoppingCart class="w-10 h-10 p-2 rounded-full text-white bg-green-500" @click="addNewTicket" />
        </div>
    </header>

    <main>
        <div class="mx-auto">
            <CashRegisterScannedArticlesList />
            <CashRegisterGlobalActions />
        </div>
    </main>
</template>

<script setup lang="ts">
import { useScannedArticlesStore } from '~/stores/scannedArticlesStore';

const scannedArticlesStore = useScannedArticlesStore();

/// NEW TICKET ///
const addNewTicket = () => {
    scannedArticlesStore.addNewTicket();
};
</script>
