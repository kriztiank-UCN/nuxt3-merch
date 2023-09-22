<!-- Route Parameters /products/123 -->
<!-- capture id with the use route composable function -->
<template>
  <div>
    <!-- <p>Product details for {{ id }}</p> -->
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  const uri = 'https://fakestoreapi.com/products/' + id

  //  fetch the products
  const { data: product } = await useFetch(uri, { key: id })

  definePageMeta({
    layout: "products",
  })
</script>
