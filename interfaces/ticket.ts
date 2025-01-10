import type { ScannedArticle } from './scannedArticle';
import { PaymentMethod } from '~/enums/paymentMethod';

export interface Ticket {
    id?: string,
    scannedArticles: ScannedArticle[],
    paymentMethod: PaymentMethod,
    percentageDiscount: number,
    rawDiscount: number,
    totalPrice: number,
}
