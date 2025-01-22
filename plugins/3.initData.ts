import { useArticlesStore } from '~/stores/articlesStore';
import { useTicketsStore } from '~/stores/ticketsStore';
import { useScannedArticlesStore } from '~/stores/scannedArticlesStore';

export default defineNuxtPlugin(() => {
    // Populate the articles data
    const articlesStore = useArticlesStore();
    articlesStore.init();

    // Populate the tickets data
    const ticketsStore = useTicketsStore();
    ticketsStore.init();

    // Populate the scaned articles data
    const scannedArticlesStore = useScannedArticlesStore();
    scannedArticlesStore.init();
});
