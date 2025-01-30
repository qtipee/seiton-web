import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const useAuth = () => {
    const { $auth, $user } = useNuxtApp();

    const login = async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword($auth, email, password);
            $user.value = userCredential.user;
        } catch (error) {
            console.log('Login error:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut($auth);
            $user.value = null;
        } catch (error) {
            console.log('Logout error:', error);
            throw error;
        }
    };

    return {
        user: $user,
        login,
        logout,
    };
};
