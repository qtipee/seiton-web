// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Client-side rendering only
    ssr: false,
    runtimeConfig: {
        public: {
            firebaseConfig: {
                apiKey: process.env.PUBLIC_FIREBASE_API_KEY,
                authDomain: process.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
                projectId: process.env.PUBLIC_FIREBASE_PROJECT_ID,
                storageBucket: process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
                messagingSenderId: process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
                appId: process.env.PUBLIC_FIREBASE_APP_ID,
            },
            functions: {
                sendEmail: process.env.PUBLIC_FIREBASE_FUNCTIONS_SEND_EMAIL,
            },
        },
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    modules: ['@pinia/nuxt', '@vite-pwa/nuxt'],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    pwa: {
        registerType: 'autoUpdate',
    },
});