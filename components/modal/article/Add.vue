<template>
<Modal
        v-model:open="localOpen"
        title="Ajouter un Article"
        approve-text="Ajouter"
        @accepted="addArticle"
        @update:open="localOpen = $event"
    >
        <div class="flex flex-col space-y-4">
            <!-- Article ID -->
            <div class="flex flex-col space-y-2">
                <label for="article-id">
                    ID de l'article :
                </label>
                <input v-model="articleID" name="article-id" class="p-2 border rounded" />
            </div>

            <!-- Article Quantity -->
            <div class="flex flex-col space-y-2">
                <label for="article-quantity">
                    {{ `Quantité : ${articleQty}` }}
                </label>
            </div>

            <!-- -/+ Quantity Buttons -->
            <div class="flex space-x-4">
                <IconsMinus
                    class="w-12 h-12 rounded-full text-white bg-red-500"
                    @click="updateArticleQty(-1)"
                />
                <IconsPlus
                    class="w-12 h-12 rounded-full text-white bg-green-500"
                    @click="updateArticleQty(1)"
                />
            </div>
            
            <p class="italic text-gray-500">
                Permet d'ajouter manuellement un article au ticket si le scanneur pose problème.
            </p>
        </div>
    </Modal>
</template>

<script setup lang="ts">
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
});

// Emit changes to parent
const emit = defineEmits(['update:open']);

// Create a local reactive copy of the `open` prop
const localOpen = computed({
    get: () => props.open, // Read from the prop
    set: (value) => emit('update:open', value), // Emit changes back to parent
});

const articleID = ref('');
const articleQty = ref(1);

/**
 * Update the article's quantity.
 * @param {number} qty 
 */
const updateArticleQty = (qty: number) => {
    articleQty.value += qty;
    if (articleQty.value < 1) {
        articleQty.value = 1;
    }
};

/**
 * Manually add an article to the ticket if accepted.
 * @param {boolean} accepted
 */
const addArticle = (accepted: boolean) => {
    if (accepted) {
        useScannedArticlesStore().addScannedArticle(articleID.value, articleQty.value);
    }
};

watch(() => props.open, (isOpen) => {
    if (isOpen) {
        // Reset form when the modal appears
        articleID.value = '';
        articleQty.value = 1;
    }
});
</script>
