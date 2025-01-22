import { signInWithEmailAndPassword, signOut, onAuthStateChanged, type User } from 'firebase/auth';

export const useAuth = () => {
    const { $auth } = useNuxtApp();

    const login = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword($auth, email, password);
        } catch (error) {
            console.log('Login error:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut($auth);
        } catch (error) {
            console.log('Logout error:', error);
            throw error;
        }
    };

    return {
        login,
        logout,
    };
};
