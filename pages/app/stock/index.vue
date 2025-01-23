<template>
    <header class="bg-gray-600 text-white">
        <div class="flex justify-between items-center mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <h1 class="flex-1 text-2xl font-bold">
                Stock
            </h1>
            <div class="flex flex-row-reverse items-center gap-4">
                <!-- Add new article button -->
                <NuxtLink
                    to="/app/stock/new"
                    class="rounded bg-white py-1 px-3 text-left text-gray-900 hover:bg-gray-100 duration-200"
                >
                    <span class="flex items-center space-x-1">
                        <IconsPlusCircle class="size-3.5 pt-0.5" />
                        <span class="text-sm">Ajouter Article</span>
                    </span>
                </NuxtLink>
            </div>
        </div>
    </header>

    <main>
        <div class="mx-auto">
            <StockList />
        </div>
    </main>
</template>
