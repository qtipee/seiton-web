<template>
    <div class="flex flex-col overflow-y-auto">
        <NuxtLink
            v-for="(article, index) in useArticlesStore().articles"
            :key="index"
            :to="`/app/stock/${article.articleID}`"
            :class="['flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8', index % 2 === 0 ? 'bg-white' : 'bg-gray-100']"
        >
            <div class="flex-1 flex justify-between items-center">
                <div>{{ article.name }}</div>
                <div class="text-left">{{ article.articleID }}</div>
            </div>
        </NuxtLink>
    </div>
</template>
