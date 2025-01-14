import type { Ticket } from '~/interfaces/ticket';

export const useTicketService = () => {
    const { $database } = useNuxtApp();

    // Reactive list of paid tickets
    const tickets = ref<Ticket[]>([]);

    /**
     * Return all tickets from the database.
     */
    const getTickets = async (): Promise<Ticket[]> => {
        return await $database.getTickets();
    };

    /**
     * Get the ticket associated with the given ID.
     */
    const getTicketById = async (id: string): Promise<Ticket | null> => {
        if (!id) {
            return null;
        }

        return await $database.getTicket(id);
    };

    /**
     * Create a new ticket and save it to the database.
     */
    const createTicket = async (ticket: Ticket): Promise<string | null> => {
        return await $database.createTicket(ticket);
    };

    return {
        tickets: computed(() => tickets.value),
        getTickets,
        getTicketById,
        createTicket,
    };
}
