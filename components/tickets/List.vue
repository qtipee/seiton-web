<template>
    <div class="flex flex-col overflow-y-auto">
        <div
            v-for="([date, ticketsGroup], index) in ticketsStore.sortedTickets"
            :key="index"
        >
            <!-- Date group -->
            <h3 class="px-4 py-2 sm:px-6 lg:px-8 bg-gray-700 text-white font-semibold">
                {{ formatDate(new Date(date)) }}
            </h3>
            <NuxtLink
                v-for="(ticket, _index) in ticketsGroup"
                :key="_index"
                :to="`/app/tickets/${ticket.id}`"
                :class="['flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8', _index % 2 === 0 ? 'bg-white' : 'bg-gray-100']"
            >
                <p v-if="ticket.datetime">
                    {{ formatTimestamp(ticket.datetime, true) }}
                </p>
                <p>
                    {{ ticket.totalPrice.toFixed(2) }} CHF
                </p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const ticketsStore = useTicketsStore();
</script>
