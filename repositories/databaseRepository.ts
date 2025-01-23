import type { Article } from '~/interfaces/article';
import type { Ticket } from '~/interfaces/ticket';

/**
 * Abstract Database Repository interface that defines
 * the mandatory methods to communicate with the Database.
 */
export interface DatabaseRepository {
    // ARTICLES
    getArticles(): Promise<Article[]>;
    getArticle(id: string): Promise<Article | null>;
    getArticleByArticleID(articleID: string): Promise<Article | null>;
    createArticle(article: Article): Promise<string | null>;
    updateArticle(documentId: string, article: Article): Promise<boolean>;
    updateArticlesQuantity(articles: Article[]): Promise<void>;
    subscribeToArticles(callback: (articles: Article[]) => void): void;

    // TICKETS
    getTickets(): Promise<Ticket[]>;
    createTicket(ticket: Ticket): Promise<string | null>;
    getTicket(id: string): Promise<Ticket | null>;
    subscribeToTickets(callback: (tickets: Ticket[]) => void): void;
}
