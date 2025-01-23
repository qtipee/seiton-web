<template>
    <div class="flex flex-row-reverse items-center gap-4">
        <!-- New tab ticket button -->
        <button
            class="rounded bg-white py-1 px-3 text-left text-gray-900 hover:bg-gray-100 duration-200"
            @click="scannedArticlesStore.addNewTicket"
        >
            <span class="flex items-center space-x-2">
                <IconsShoppingCart class="size-3.5" />
                <span class="text-sm">Nouveau Ticket</span>
            </span>
        </button>

        <!-- Open tickets (visible if more than one) -->
        <div
            v-if="scannedArticlesStore.ticketsOpen.length > 1"
            class="flex space-x-2"
        >
            <button
                v-for="(_, index) in scannedArticlesStore.ticketsOpen"
                :key="index"
                class="rounded bg-white py-1.5 px-3 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300"
                :class="[scannedArticlesStore.activeTicketIndex === index ? 'bg-gray-300 outline-gray-900' : '']"
                @click="scannedArticlesStore.selectActiveTicket(index)"
            >
                <span class="text-sm">
                    Ticket {{ index + 1 }}
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
const scannedArticlesStore = useScannedArticlesStore();
</script>