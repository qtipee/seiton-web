import { initializeApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin(() => {
    // Initialize Firebase
    const firebaseConfig = useRuntimeConfig().public.firebaseConfig as FirebaseOptions;
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    return {
        provide: {
            firestore: db,
        },
    };
});
