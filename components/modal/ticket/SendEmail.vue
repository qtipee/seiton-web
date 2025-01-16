<template>
    <Modal
        v-model:open="localOpen"
        title="Envoyer le Ticket par Email"
        approve-text="Envoyer"
        @accepted="sendByEmail"
        @update:open="localOpen = $event"
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
</template>

<script setup lang="ts">
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
    ticketId: {
        type: String,
        required: true,
    },
});

// Emit changes to parent
const emit = defineEmits(['update:open']);

// Create a local reactive copy of the `open` prop
const localOpen = computed({
    get: () => props.open, // Read from the prop
    set: (value) => emit('update:open', value), // Emit changes back to parent
});

const email = ref("");

/**
 * Send the ticket by email if accepted.
 * @param {boolean} accepted 
 */
const sendByEmail = async (accepted: boolean) => {
    if (accepted && email.value && props.ticketId) {
        const url = useRuntimeConfig().public.apiRoutes.sendTicketEmailUrl as string;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email.value,
                    ticketId: props.ticketId,
                }),
            });
            // TODO: test
            console.log('RESPONSE:', response.status);
        } catch (error) {
            console.error(`Error while sending email: ${error}`);
        }
    }
};
</script>
