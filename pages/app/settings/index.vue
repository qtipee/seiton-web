<template>
    <header class="bg-gray-600 text-white">
        <div class="flex justify-between items-center mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <h1 class="flex-1 text-2xl font-bold">Paramètres</h1>
        </div>
    </header>

    <main>
        <div class="mx-auto">
            <div class="px-4 py-2 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">
                    Session
                </h2>
                <form @submit.prevent="handleLogout">
                    <button
                        type="submit"
                        class="py-3 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
                        >
                            Se déconnecter
                    </button>
                </form>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
const { logout } = useAuth();

const handleLogout = async () => {
    try {
        await logout();
        // Redirect to login after successful logout
        navigateTo('/login');
    } catch (error) {
        console.error('Logout failed:', error);
    }
};
</script>
