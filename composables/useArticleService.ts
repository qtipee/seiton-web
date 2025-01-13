import type { Article } from '~/interfaces/article';

export const useArticleService = () => {
    const { $database } = useNuxtApp();

    /**
     * Return all the articles from the collection.
     */
    const getArticles = async (): Promise<Article[]> => {
        return await $database.getArticles();
    }

    /**
     * Return the article associated with the given ID if it exists.
     */
    const getArticle = async (articleId: string): Promise<Article | null> => {
        return await $database.getArticleById(articleId);
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

    return {
        getArticles,
        getArticle,
        addArticle,
        updateArticle,
        updateArticlesQuantity,
    };
}
