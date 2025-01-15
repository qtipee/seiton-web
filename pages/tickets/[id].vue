<template>
    <header class="bg-gray-600 text-white">
        <div class="flex justify-between items-center mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <!-- TODO: copy ID by clicking -->
            <h1 class="text-2xl font-bold">
                Ticket <span class="text-xl font-semibold">#{{ ticketId }}</span>
            </h1>
            <IconsEnvelope class="w-10 h-10 p-2 rounded-full text-white bg-blue-500" @click="modalSendEmailOpen = true" />
        </div>
    </header>

    <main>
        <div class="mx-auto">
            <div class="flex flex-col">
                <!-- Header Row -->
                <div class="flex items-center px-4 py-2 sm:px-6 lg:px-8 bg-gray-700 text-white font-semibold">
                    <div class="flex-1 text-left">Article</div>
                    <div class="w-20 text-right">Quantité</div>
                    <div class="w-20 text-right">Rabais</div>
                    <div class="w-20 text-right">Prix</div>
                    <div class="w-20 text-right">Total</div>
                </div>

                <!-- List of Articles -->
                <div class="overflow-y-auto">
                    <div
                        v-for="(item, index) in ticket?.scannedArticles"
                        :key="item.article.id"
                        :class="['flex items-center px-4 py-2 sm:px-6 lg:px-8', index % 2 === 0 ? 'bg-white' : 'bg-gray-100']"
                    >
                        <div class="flex-1 text-left">{{ item.article.name }}</div>
                        <div class="w-20 text-right">{{ item.quantity }}</div>
                        <div class="w-20 text-right">{{ item.article.discount }}</div>
                        <div class="w-20 text-right">{{ item.article.unitPrice }}</div>
                        <div class="w-20 text-right">{{ ((item.article.unitPrice - (item.article.discount ?? 0.0)) * item.quantity).toFixed(2) }}</div>
                    </div>
                </div>

                <div class="fixed inset-x-0 bottom-0">
                    <!-- Global discounts and total price -->
                    <div class="flex flex-col space-y-2 px-4 py-2 sm:px-6 lg:px-8">

                        <!-- Global discount in cash (raw) -->
                        <div class="flex justify-between items-center">
                            <h3 class="text-sm font-semibold">Rabais en CHF :</h3>
                            <p class="text-sm font-semibold">
                                -{{ ticket?.rawDiscount.toFixed(2) }} CHF
                            </p>
                        </div>

                        <!-- Global discount in percentage -->
                        <div class="flex justify-between items-center">
                            <h3 class="text-sm font-semibold">Rabais en % :</h3>
                            <p class="text-sm font-semibold">
                                -{{ ticket?.percentageDiscount.toFixed(2) }}%
                            </p>
                        </div>

                        <!-- Total price -->
                        <div class="flex justify-between items-center pt-2">
                            <h3 class="font-semibold">Prix total :</h3>
                            <span class="font-semibold">
                                {{ ticket?.totalPrice.toFixed(2) }} CHF
                            </span>
                        </div>

                        <!-- Ticket general information -->
                        <div v-if="ticket?.datetime" class="flex justify-between items-center pt-2">
                            <h3 class="font-semibold">Date et heure :</h3>
                            <span class="font-semibold">
                                {{ formatTimestamp(ticket?.datetime, true) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modals -->
        <!-- Send ticket by email modal -->
        <Modal
            v-model:open="modalSendEmailOpen"
            title="Envoyer le Ticket par Email"
            approve-text="Envoyer"
            @accepted="sendByEmail"
        >
            <div class="flex flex-col space-y-4">
                <!-- Email -->
                <div class="flex flex-col space-y-2">
                    <label for="email">
                        Adresse email :
                    </label>
                    <input type="email" v-model="email" name="email" class="p-2 border rounded" />
                </div>

                <p class="italic text-gray-500">
                    Cette opération peut prendre quelques minutes.
                </p>
            </div>
        </Modal>
    </main>
</template>

<script setup lang="ts">
import type { Ticket } from '~/interfaces/ticket';

const route = useRoute();
const ticketId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
const ticket = ref<Ticket | null>(null);

onMounted(async () => {
    if (ticketId) {
        try {
            const ticketDoc = await useTicketService().getTicketById(ticketId);
            ticket.value = ticketDoc || null;
        } catch (error) {
            console.error("Error fetching ticket:", error);
        }
    }
});

const modalSendEmailOpen = ref(false);
const email = ref("");

/**
 * Send the ticket by email if accepted.
 * @param {boolean} accepted 
 */
const sendByEmail = async (accepted: boolean) => {
    if (accepted && email.value && ticketId) {
        const url = useRuntimeConfig().public.apiRoutes.sendTicketEmailUrl as string;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email.value,
                    ticketId,
                }),
            });
            console.log('RESPONSE:', response.status);
        } catch (error) {
            console.error(`HTTP error with API endpoint: ${url}`);
        }
    }
};
</script>
