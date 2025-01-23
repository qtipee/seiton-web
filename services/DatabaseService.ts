import type { DatabaseRepository } from '~/repositories/databaseRepository';
import type { Article } from '~/interfaces/article';
import type { Ticket } from '~/interfaces/ticket';

/**
* Service to communicate with the Database.
* It uses a Database Repository to easily adapt to different databases if needed.
*/
export class DatabaseService {
    private database: DatabaseRepository;
    
    constructor(database: DatabaseRepository) {
        this.database = database;
    }
    
    // ARTICLES
    
    async getArticles(): Promise<Article[]> {
        return await this.database.getArticles();
    }

    async getArticle(id: string): Promise<Article | null> {
        return await this.database.getArticle(id);
    }
    
    async getArticleByArticleID(articleID: string): Promise<Article | null> {
        return await this.database.getArticleByArticleID(articleID);
    }
    
    async createArticle(article: Article): Promise<string | null> {
        return await this.database.createArticle(article);
    }
    
    async updateArticle(id: string, article: Article): Promise<boolean> {
        return await this.database.updateArticle(id, article);
    }
    
    async updateArticlesQuantity(articles: Article[]): Promise<void> {
        await this.database.updateArticlesQuantity(articles);
    }

    subscribeToArticles(callback: (articles: Article[]) => void): void {
        this.database.subscribeToArticles(callback);
    }
    
    // TICKETS
    
    async getTickets(): Promise<Ticket[]> {
        return await this.database.getTickets();
    }
    
    async createTicket(ticket: Ticket): Promise<string | null> {
        return await this.database.createTicket(ticket);
    }
    
    async getTicket(id: string): Promise<Ticket | null> {
        return await this.database.getTicket(id);
    }

    subscribeToTickets(callback: (tickets: Ticket[]) => void): void {
        this.database.subscribeToTickets(callback);
    }
}
