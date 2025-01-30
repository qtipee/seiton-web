import { onAuthStateChanged } from 'firebase/auth';

export default defineNuxtRouteMiddleware(async () => {
    const { $auth, $user } = useNuxtApp();
    
    // Ensure Firebase has restored authentication state
    if ($user.value === null) {
        await new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged($auth, (currentUser) => {
                // Store user in state
                $user.value = currentUser;
                // Stop listening after first update
                unsubscribe();
                resolve(null);
            });
        });
    }

    // Redirect if no authenticated user
    if (!$user.value) {
        return navigateTo('/login');
    }
});
