import type { DatabaseRepository } from '~/repositories/databaseRepository';
import { FirestoreRepository } from '~/repositories/firestoreRepository';
import { DatabaseService } from '~/services/DatabaseService';

export default defineNuxtPlugin(() => {
    // Define which database to use here:
    const repository: DatabaseRepository = new FirestoreRepository();
    const service: DatabaseService = new DatabaseService(repository);
    
    return {
        provide: {
            database: service,
        },
    };
});
