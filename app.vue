<template>
    <div class="h-screen flex flex-col bg-gray-100">
        <!-- Tab Navigation -->
        <nav class="flex justify-around bg-white shadow-md p-4">
            <NuxtLink
                v-for="tab in tabs"
                :key="tab.name"
                :to="tab.route"
                class="flex flex-col items-center text-gray-600 hover:text-blue-500"
                :class="{ 'text-blue-500': tab.route === $route.path }"
            >
                <i :class="tab.icon"></i>
                <span>{{ tab.name }}</span>
            </NuxtLink>
        </nav>
    
        <!-- Page Content -->
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
const tabs = [
    { name: 'Caisse', icon: 'fa fa-cart-shopping', route: '/cash-register' },
    { name: 'Tickets', icon: 'fa fa-file-text', route: '/tickets' },
    { name: 'Stock', icon: 'fa fa-box', route: '/stock' },
];

/*
import { useScannedArticlesStore } from '~/stores/scannedArticlesStore';

const scannedArticles = useScannedArticlesStore();
console.log(scannedArticles.activeTicketIndex);
*/
</script>
