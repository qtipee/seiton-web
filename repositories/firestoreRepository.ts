import { getFirestore, collection, getDocs, addDoc, doc, getDoc, updateDoc, runTransaction, serverTimestamp } from 'firebase/firestore';
import type { DatabaseRepository } from '~/repositories/databaseRepository';
import type { Article } from '~/interfaces/article';
import type { Ticket } from '~/interfaces/ticket';

/**
* Firestore Repository for interacting with Firestore for Articles and Tickets.
*/
export class FirestoreRepository implements DatabaseRepository {
    private db = getFirestore();
    
    /// ARTICLES ///
    
    async getArticles(): Promise<Article[]> {
        try {
            const snapshot = await getDocs(collection(this.db, 'articles'));
            return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Article));
        } catch (error) {
            console.error('Error fetching articles:', error);
            return [];
        }
    }
    
    async getArticleById(articleID: string): Promise<Article | null> {
        try {
            const querySnapshot = await getDocs(collection(this.db, 'articles'));
            const articleDoc = querySnapshot.docs.find((doc) => doc.data().articleID === articleID);
            return articleDoc ? (articleDoc.data() as Article) : null;
        } catch (error) {
            console.error('Error fetching article by ID:', error);
            return null;
        }
    }
    
    async createArticle(article: Article): Promise<string | null> {
        try {
            const docRef = await addDoc(collection(this.db, 'articles'), {
                ...article,
                datetime: serverTimestamp(),
            });
            return docRef.id;
        } catch (error) {
            console.error('Error creating article:', error);
            return null;
        }
    }
    
    async updateArticle(documentId: string, article: Article): Promise<boolean> {
        try {
            const articleRef = doc(this.db, 'articles', documentId);
            // TODO: not sure, to check
            await updateDoc(articleRef, { ...article });
            return true;
        } catch (error) {
            console.error('Error updating article:', error);
            return false;
        }
    }
    
    async updateArticlesQuantity(articles: Article[]): Promise<void> {
        try {
            await runTransaction(this.db, async (transaction) => {
                articles.forEach((article) => {
                    const articleRef = doc(this.db, 'articles', article.id ?? '');
                    transaction.update(articleRef, { quantity: article.quantity });
                });
            });
        } catch (error) {
            console.error('Error updating articles quantity:', error);
        }
    }
    
    /// TICKETS ///
    
    async getTickets(): Promise<Ticket[]> {
        try {
            const snapshot = await getDocs(collection(this.db, 'tickets'));
            return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Ticket));
        } catch (error) {
            console.error('Error fetching tickets:', error);
            return [];
        }
    }
    
    async createTicket(ticket: Ticket): Promise<string | null> {
        try {
            const docRef = await addDoc(collection(this.db, 'tickets'), {
                ...ticket,
                datetime: serverTimestamp(),
            });
            return docRef.id;
        } catch (error) {
            console.error('Error creating ticket:', error);
            return null;
        }
    }
    
    async getTicket(id: string): Promise<Ticket | null> {
        try {
            const ticketRef = doc(this.db, 'tickets', id);
            const ticketDoc = await getDoc(ticketRef);
            return ticketDoc.exists() ? (ticketDoc.data() as Ticket) : null;
        } catch (error) {
            console.error('Error fetching ticket:', error);
            return null;
        }
    }
}
