import type { Timestamp } from 'firebase/firestore';
import type { ScannedArticle } from './scannedArticle';
import { PaymentMethod } from '~/enums/paymentMethod';

export interface Ticket {
    id?: string,
    scannedArticles: ScannedArticle[],
    datetime?: Timestamp,
    paymentMethod: PaymentMethod,
    percentageDiscount: number,
    rawDiscount: number,
    totalPrice: number,
}
