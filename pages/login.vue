<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
                Se connecter
            </h2>
            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    v-model="email"
                    required
                    class="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                    />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium text-gray-600">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        id="password"
                        v-model="password"
                        required
                        class="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="********"
                    />
                </div>
                <button
                    type="submit"
                    class="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                        Se connecter
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const { login } = useAuth();

const email = ref('');
const password = ref('');

const handleLogin = async () => {
    try {
        await login(email.value, password.value);
        // Redirect to app after successful login
        navigateTo('/app/cash-register');
    } catch (error) {
        console.error('Login failed:', error);
    }
};
</script>
