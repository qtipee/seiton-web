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

watch(() => useRoute().path, (newPath) => {
    // Set the current tab based on the url
    const matchedTab = tabs.find((tab) => newPath.includes(tab.slug));

    if (matchedTab) {
        currentTab.value = matchedTab.slug;
    }
}, { immediate: true });
</script>
