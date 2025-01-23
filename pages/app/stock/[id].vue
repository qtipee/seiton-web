<template>
    <header class="bg-gray-600 text-white">
        <div class="flex justify-between items-center mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <h1 class="flex-1 text-2xl font-bold">
                Article <span v-if="articleID" class="text-xl font-semibold">#{{ articleID }}</span>
            </h1>
        </div>
    </header>

    <main>
        <div class="mx-auto">
            <div class="flex flex-col space-y-4 px-4 py-2 sm:px-6 lg:px-8">
                <!-- Article ID -->
                <div class="flex flex-col space-y-2">
                    <label for="article-id">
                        ID de l'article :
                    </label>
                    <div class="flex justify-between items-center space-x-4">
                        <input v-model="articleID" name="article-id" class="flex-1 p-2 border rounded" @keyup.enter="searchArticle" />
                        <IconsMagnifyingGlass class="w-6 h-6 text-primary-500" @click="searchArticle" />
                    </div>
                </div>
                
                <!-- Article Name -->
                <div class="flex flex-col space-y-2">
                    <label for="article-name">
                        Nom de l'article :
                    </label>
                    <input v-model="article.name" name="article-name" :disabled="disabled" class="p-2 border rounded" />
                </div>
                
                <!-- Article Quantity -->
                <div class="flex flex-col space-y-2">
                    <label for="article-quantity">
                        Quantity :
                    </label>
                    <input type="number" v-model="article.quantity" name="article-quantity" :disabled="disabled" class="p-2 border rounded" />
                </div>
                
                <!-- Article Unit Price -->
                <div class="flex flex-col space-y-2">
                    <label for="article-unit-price">
                        Prix unitaire :
                    </label>
                    <input type="number" v-model="article.unitPrice" name="article-unit-price" :disabled="disabled" class="p-2 border rounded" />
                </div>
                
                <!-- Article Discount -->
                <div class="flex flex-col space-y-2">
                    <label for="article-discount">
                        Rabais :
                    </label>
                    <input type="number" v-model="article.discount" name="article-discount" :disabled="disabled" class="p-2 border rounded" />
                </div>

                <!-- Save Button -->
                <button
                    class="inline-flex items-center justify-center py-3 px-4 font-semibold rounded text-white bg-primary-500 hover:bg-primary-700 duration-200"
                    @click="addUpdateArticle"
                    :disabled="disabled"
                >
                    Enregistrer
                </button>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import type { Article } from '~/interfaces/article';

const route = useRoute();
const articleIDParam = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
const article = ref<Article>({
    articleID: '',
    discount: 0,
    name: '',
    quantity: 0,
    unitPrice: 0,
});

const articleID = ref(articleIDParam === 'new' ? '' : articleIDParam);
const disabled = ref(true);

/**
 * Try to get the article with the ID from the input.
 * If it does not exist, the form will create a new
 * article in the database. Otherwise, the form will
 * update the article in the database.
 */
const searchArticle = async () => {
    if (!articleID.value) {
        return;
    }

    const _article = await useArticlesStore().getArticleByArticleID(articleID.value);
    article.value = _article ?? { articleID: '', discount: 0, name: '', quantity: 0, unitPrice: 0 };

    if (articleID.value) {
        disabled.value = false;
    }
};

/**
 * Add or update the article to/in the database if accepted.
 * @param {boolean} accepted 
 */
const addUpdateArticle = async () => {
    if (articleID.value && article.value) {
        if (article.value.id) {
            // Article already exists, update it
            await useArticleService().updateArticle(article.value.id, article.value);
        } else {
            // Article does not exist yet, create it
            article.value.articleID = articleID.value;
            await useArticleService().addArticle(article.value);
        }

        // Return to the stock page
        navigateTo('/app/stock');
    }
};

onMounted(() => {
    searchArticle();
});

watch(() => articleID.value, () => {
    // Disable the form when the article ID is modified
    // to avoid a wrong ID or wrong article data
    disabled.value = true;
});
</script>
