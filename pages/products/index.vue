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
// nuxt composable function
definePageMeta({
  layout: 'products',
})
</script>
