import { defineStore } from 'pinia';
import type { Ticket } from '~/interfaces/ticket';
import { useTicketService } from '~/composables/useTicketService';

export const useTicketsStore = defineStore('tickets', () => {
    const { subscribeToTickets } = useTicketService();

    /// STATE ///

    // Cached tickets from the database
    const tickets = ref<Ticket[]>(JSON.parse(localStorage.getItem('tickets') || '[]'));

    /// GETTERS ///

    // Tickets grouped by date and sorted by descending order
    const sortedTickets = computed(() => {
        const groupedTickets = new Map<string, Ticket[]>();

        tickets.value.forEach((ticket) => {
            if (ticket.datetime) {
                // Use ISO string for grouping by date (key)
                const dateKey = ticket.datetime.toDate().toISOString().split('T')[0]; // Extract YYYY-MM-DD

                if (!groupedTickets.has(dateKey)) {
                    // Create a new entry with the date as the key
                    groupedTickets.set(dateKey, []);
                }
                groupedTickets.get(dateKey)?.push(ticket);
            }
        });

        // Sort tickets within each group of date
        groupedTickets.forEach((group, dateKey) => {
            groupedTickets.set(
                dateKey,
                group.sort((a, b) => {
                    const dateA = a.datetime ? a.datetime.toDate().getTime() : 0;
                    const dateB = b.datetime ? b.datetime.toDate().getTime() : 0;

                    return dateB - dateA;
                })
            );
        });

        // Convert the map to an array and sort by date key in descending order
        const sortedGroupedTickets = Array.from(groupedTickets.entries()).sort(
            ([a], [b]) => new Date(b).getTime() - new Date(a).getTime()
        );

        return sortedGroupedTickets;
    });

    /// ACTIONS ///

    /**
     * Fetch the tickets from the database and store them.
     * Call this method when the app initialises or to
     * reset the tickets in the local cache.
     */
    const init = async() => {
        // Listen for changes in the tickets collection
        // Subscribing to this event will fetch the data
        subscribeToTickets((_tickets) => {
            tickets.value = _tickets;
            saveToLocalStorage();
        });
    };

    /**
     * Save tickets collection to local storage.
     */
    const saveToLocalStorage = () => {
        localStorage.setItem('tickets', JSON.stringify(tickets.value));
    };

    return {
        tickets: computed(() => tickets.value),
        sortedTickets,
        init,
    };
});
