<template>
    <div class="article-row">
        <span class="article-name">{{ article.article.name }}</span>
        <span class="article-quantity">{{ article.quantity }}</span>
        <span class="article-discount">{{ articleDiscount }}</span>
        <span class="article-unit-price">{{ unitPriceText }}</span>
        <span class="article-total-price">{{ totalPriceText }}</span>
        <button @click="showSheet = true" class="update-quantity-button">
            <img src="" alt="Update Quantity" />
        </button>
    
        <!--Modal v-if="showSheet" @close="showSheet = false">
            <UpdateArticleSheet
            :article="tempArticle"
            @save="updateArticleQuantity"
            />
        </Modal-->
    </div>
</template>
