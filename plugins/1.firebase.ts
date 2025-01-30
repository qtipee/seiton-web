import { initializeApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';

export default defineNuxtPlugin(() => {
    // Initialize Firebase
    const firebaseConfig = useRuntimeConfig().public.firebaseConfig as FirebaseOptions;
    const app = initializeApp(firebaseConfig);

    // Firestore
    const db = getFirestore(app);

    // Authentication
    const auth = getAuth(app);
    const user = useState<User | null>('user', () => null);

    // Track authentication state
    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser;
    });

    return {
        provide: {
            firestore: db,
            auth: auth,
            user: user,
        },
    };
});
