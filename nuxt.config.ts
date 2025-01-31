// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Client-side rendering only
    ssr: false,
    runtimeConfig: {
        public: {
            firebaseConfig: {
                apiKey: 'AIzaSyCeaL8D5Uu5Wms4-4NAgxy-JXq-W3WsDDI',
                authDomain: 'mogumart-seiton.firebaseapp.com',
                projectId: 'mogumart-seiton',
                storageBucket: 'mogumart-seiton.appspot.com',
                messagingSenderId: '366864580374',
                appId: '1:366864580374:web:bd1a597f39ba1329b05a37',
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