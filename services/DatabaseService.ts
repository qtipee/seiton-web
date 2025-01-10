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
    
    async getArticleById(articleId: string): Promise<Article | null> {
        return await this.database.getArticleById(articleId);
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
}
