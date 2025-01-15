<template>
    <header class="bg-white shadow">
        <div class="flex justify-between items-center mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <h1 class="flex-1 text-2xl font-bold">
                Stock
            </h1>
            <div class="flex flex-row-reverse items-center gap-4">
                <!-- Add new article button -->
                <button
                    class="rounded bg-white py-1.5 px-3 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300"
                    @click="modalAddArticleOpen = true"
                >
                    <span class="flex items-center space-x-1">
                        <IconsPlus class="size-5 pt-0.5" />
                        <span class="text-sm font-semibold">Ajouter Article</span>
                    </span>
                </button>
            </div>
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
