export default defineNuxtRouteMiddleware(() => {
    const { $auth } = useNuxtApp();
    const user = $auth.currentUser;

    if (!user) {
        return navigateTo('/login');
    }
});
