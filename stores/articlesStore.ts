import { defineStore } from 'pinia';
import type { Article } from '~/interfaces/article';
import { useArticleService } from '~/composables/useArticleService';

export const useArticlesStore = defineStore('articles', () => {
    const { getArticles, getArticle } = useArticleService();

    // State

    // Cached articles from the database
    const articles = ref<Article[]>([]);

    // Actions (methods)

    /**
     * Fetch the articles from the database and store them.
     * Call this method when the app initialises or to
     * reset the articles in the local cache.
     */
    const initArticles = async () => {
        const fetchedArticles = await getArticles();
        articles.value = fetchedArticles;
    }

    /**
     * Return the article associated to the given article ID if
     * it exists. It first tries to get it from the local cache,
     * otherwise it will fetch it from the database.
     * @param articleId {string}
     * @returns {Promise<Article | null>}
     */
    const getArticleById = async (articleId: string): Promise<Article | null> => {
        if (!articleId) {
            return null;
        }

        // Return the article from the cache if present
        const cachedArticle = articles.value.find(
            (article) => article.articleId === articleId
        );
        if (cachedArticle) {
            return cachedArticle;
        }

        // Otherwise, try to fetch the article from the database
        return await getArticle(articleId);
    };

    return {
        articles: computed(() => articles.value),
        initArticles,
        getArticleById,
    };
});
