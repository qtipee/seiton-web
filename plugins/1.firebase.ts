import { initializeApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, type User } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

export default defineNuxtPlugin(() => {
    // Initialize Firebase
    const firebaseConfig = useRuntimeConfig().public.firebaseConfig as FirebaseOptions;
    const app = initializeApp(firebaseConfig);

    // Firestore
    const db = getFirestore(app);

    // Authentication
    const auth = getAuth(app);
    const user = useState<User | null>('user', () => null);

    // Functions
    const functions = getFunctions(app, 'europe-west6');

    return {
        provide: {
            firestore: db,
            auth: auth,
            user: user,
            functions: functions,
        },
    };
});
