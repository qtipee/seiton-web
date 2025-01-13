import type { Ticket } from '~/interfaces/ticket';

export const useTicketService = () => {
    const { $database } = useNuxtApp();

    // Reactive list of paid tickets
    const tickets = ref<Ticket[]>([]);

    /**
     * Fetch the tickets from the database and store them.
     */
    const setTickets = async (): Promise<void> => {
        const fetchedTickets = await $database.getTickets();
        tickets.value = fetchedTickets;
    };

    /**
     * Create a new ticket and save it to the database.
     */
    const createTicket = async (ticket: Ticket): Promise<string | null> => {
        return await $database.createTicket(ticket);
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

    return {
        tickets: computed(() => tickets.value),
        setTickets,
        createTicket,
        getTicketById,
    };
}
