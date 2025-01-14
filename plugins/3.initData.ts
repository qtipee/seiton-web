import { useArticlesStore } from '~/stores/articlesStore';
import { useTicketsStore } from '~/stores/ticketsStore';

export default defineNuxtPlugin(() => {
    // Populate the articles data
    const articlesStore = useArticlesStore();
    articlesStore.initArticles();

    // Populate the tickets data
    const ticketsStore = useTicketsStore();
    ticketsStore.initTickets();
});
