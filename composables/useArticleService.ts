import type { Article } from '~/interfaces/article';

export const useArticleService = () => {
    const { $database } = useNuxtApp();

    /**
     * Return all the articles from the database.
     */
    const getArticles = async (): Promise<Article[]> => {
        return await $database.getArticles();
    }

    /**
     * Return the article associated with the given ID if it exists.
     */
    const getArticle = async (articleID: string): Promise<Article | null> => {
        return await $database.getArticleById(articleID);
    };

    /**
     * Create a new article in the database.
     */
    const addArticle = async (article: Article): Promise<string | null> => {
        return await $database.createArticle(article);
    };

    /**
     * Update an article in the database.
     */
    const updateArticle = async (id: string, article: Article): Promise<boolean> => {
        return await $database.updateArticle(id, article);
    };

    /**
     * Update the quantity of the given articles.
     * Use this method to update the articles' stock after a client buys some of them.
     */
    const updateArticlesQuantity = async (updatedArticles: Article[]): Promise<void> => {
        if (updatedArticles.length === 0) {
            return;
        }

        await $database.updateArticlesQuantity(updatedArticles);
    };

    /**
     * Listen for changes in the articles collection.
     * @param {((articles: Article[]) => void)} callback
     */
    const subscribeToArticles = (callback: (articles: Article[]) => void): void => {
        return $database.subscribeToArticles(callback);
    };

    return {
        getArticles,
        getArticle,
        addArticle,
        updateArticle,
        updateArticlesQuantity,
        subscribeToArticles,
    };
}
