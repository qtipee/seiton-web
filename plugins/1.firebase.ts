import { initializeApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin(() => {
    // Initialize Firebase
    const firebaseConfig = useRuntimeConfig().public.firebaseConfig as FirebaseOptions;
    const app = initializeApp(firebaseConfig);

    // Firestore
    const db = getFirestore(app);

    // Authentication
    const auth = getAuth(app);

    return {
        provide: {
            firestore: db,
            auth: auth,
        },
    };
});
