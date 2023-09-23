<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<!-- script setup = composition API useFetch -->
<script setup>
//  fetch the products
const { data: products } = await useFetch('https://fakestoreapi.com/products')
// custom layout for the products folder/route, points to layouts/products.vue
definePageMeta({
  layout: 'products',
})
// browser tab title & meta tags (overwrites the global ones in nuxt.config.js)
useHead({
    title: 'Nuxt | Products',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch'}
    ]
  })
</script>
