<template>
    <div class="flex flex-col">
        <!-- Header Row -->
        <div class="flex items-center px-4 py-2 sm:px-6 lg:px-8 bg-gray-700 text-white font-semibold">
            <div class="flex-1 text-left">Article</div>
            <div class="w-20 text-right">Quantité</div>
            <div class="w-20 text-right">Rabais</div>
            <div class="w-20 text-right">Prix</div>
            <div class="w-20 text-right">Total</div>
            <div class="w-20"></div> <!-- Spacer for alignment -->
        </div>
    
        <!-- List of Scanned Articles -->
        <div class="overflow-y-auto">
            <div
                v-for="(item, index) in scannedArticlesStore.currentTicket.scannedArticles"
                :key="item.article.id"
                :class="['flex items-center px-4 py-2 sm:px-6 lg:px-8', index % 2 === 0 ? 'bg-white' : 'bg-gray-100']"
            >
                <div class="flex-1 text-left">{{ item.article.name }}</div>
                <div class="w-20 text-right">{{ item.quantity }}</div>
                <div class="w-20 text-right">{{ item.article.discount }}</div>
                <div class="w-20 text-right">{{ item.article.unitPrice }}</div>
                <div class="w-20 text-right">{{ ((item.article.unitPrice - (item.article.discount ?? 0.0)) * item.quantity).toFixed(2) }}</div>
                <div class="w-20 flex justify-end items-center">
                    <IconsPencilSquare
                        class="w-4 h-4"
                        @click="articleToUpdate = item.article; articleQty = item.quantity; modalArticleQtyOpen = true"
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- Update article's quantity -->
    <Modal
        v-model:open="modalArticleQtyOpen"
        v-if="articleToUpdate"
        :title="articleToUpdate.name"
        approve-text="Valider"
        @accepted="updateArticleQty"
    >
        <div class="flex flex-col space-y-4">
            <!-- Article Quantity -->
            <div class="flex flex-col space-y-2">
                <label>
                    {{ `Quantité : ${articleQty}` }}
                </label>
            </div>

            <!-- -/+ Quantity Buttons -->
            <div class="flex space-x-4">
                <IconsMinus
                    class="w-12 h-12 rounded-full text-white bg-red-500"
                    @click="setArticleQty(-1)"
                />
                <IconsPlus
                    class="w-12 h-12 rounded-full text-white bg-green-500"
                    @click="setArticleQty(1)"
                />
            </div>
            <p class="italic text-gray-500">
                Une quantité de 0 supprime l'article.
            </p>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import type { Article } from '~/interfaces/article';

const scannedArticlesStore = useScannedArticlesStore();

/// UPDATE ARTICLE'S QUANTITY ///
const modalArticleQtyOpen = ref(false);
const articleToUpdate = ref<Article | null>(null);
const articleQty = ref(0);

/**
 * Set the article's quantity.
 * @param {number} qty 
 */
const setArticleQty = (qty: number) => {
    articleQty.value += qty;
    if (articleQty.value < 0) {
        articleQty.value = 0;
    }
};

/**
 * Update the article's quantity if accepted.
 * @param {boolean} accepted
 */
const updateArticleQty = (accepted: boolean) => {
    if (accepted && articleToUpdate.value) {
        scannedArticlesStore.updateArticleQuantity(articleToUpdate.value.articleID, articleQty.value);
    }
};
</script>