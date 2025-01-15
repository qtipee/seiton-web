<template>
    <header class="bg-white shadow">
        <div class="flex justify-between items-center mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <h1 class="text-2xl font-bold">
                Stock
            </h1>
            <IconsPlus class="w-10 h-10 p-2 rounded-full text-white bg-green-500" @click="modalAddArticleOpen = true" />
        </div>
    </header>

    <main>
        <div class="mx-auto">
            <h2>TODO</h2>
        </div>
    </main>

    <!-- Modals -->
    <!-- Send ticket by email modal -->
    <Modal
        v-model:open="modalAddArticleOpen"
        title="Ajouter ou Modifier un Article"
        approve-text="Ajouter"
        @accepted="addUpdateArticle"
    >
        <div class="flex flex-col space-y-4">
            <!-- Article ID -->
            <div class="flex flex-col space-y-2">
                <label for="article-id">
                    ID de l'article :
                </label>
                <div class="flex justify-between items-center space-x-4">
                    <input v-model="articleId" name="article-id" class="flex-1 p-2 border rounded" @keyup.enter="searchArticle" />
                    <IconsMagnifyingGlass class="w-6 h-6 text-blue-500" @click="searchArticle" />
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
            
            <p class="italic text-gray-500">
                TODO
            </p>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import type { Article } from '~/interfaces/article';

const modalAddArticleOpen = ref(false);

const articleId = ref("");
const article = ref<Article>({
    articleId: '',
    discount: 0,
    name: '',
    quantity: 0,
    unitPrice: 0,
});
// Disable the form if there is no article ID or it has been modified
const disabled = ref(true);

/**
 * Try to get the article with the ID from the input.
 * If it does not exist, the form will create a new
 * article in the database. Otherwise, the form will
 * update the article in the database.
 */
const searchArticle = async () => {
    const _article = await useArticlesStore().getArticleById(articleId.value);
    article.value = _article ?? { articleId: '', discount: 0, name: '', quantity: 0, unitPrice: 0 };
    disabled.value = false;
};

/**
 * Add or update the article to/in the database if accepted.
 * @param {boolean} accepted 
 */
const addUpdateArticle = async (accepted: boolean) => {
    if (accepted && articleId.value && article.value) {
        if (article.value.id) {
            // Article already exists, update it
            await useArticleService().updateArticle(article.value.id, article.value);
        } else {
            // Article does not exist yet, create it
            article.value.articleId = articleId.value;
            await useArticleService().addArticle(article.value);
        }

        resetForm();
    }
};

/**
 * Reset the form fields.
 */
const resetForm = () => {
    articleId.value = '';
    article.value = { articleId: '', discount: 0, name: '', quantity: 0, unitPrice: 0 };
};

watch(() => articleId.value, () => {
    // Disable the form when the article ID is modified
    // to avoid a wrong ID or wrong article data
    disabled.value = true;
});
</script>
