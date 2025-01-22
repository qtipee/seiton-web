<template>
    <NuxtPage />
</template>

<script setup lang="ts">
// Root page to apply layout and middleware to children pages
definePageMeta({
    layout: 'app',
    middleware: ['auth'],
});
</script>
