import { useArticlesStore } from '~/stores/articlesStore';

export default defineNuxtPlugin(() => {
    // Populate the articles data
    const articlesStore = useArticlesStore();
    articlesStore.initArticles();
});
