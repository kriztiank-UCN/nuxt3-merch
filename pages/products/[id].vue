<!-- Route Parameters /products/123 -->
<!-- capture id with the use route composable function -->
<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus accusamus
      architecto dignissimos non harum tenetur rem itaque, dolor aut?
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params
</script>
