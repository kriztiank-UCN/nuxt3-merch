<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam minima unde nemo
      harum quam maxime optio quos corrupti. Eum sapiente facere nemo, laborum ullam non cum fuga
      quas eveniet harum molestiae minus atque vel ratione illo quia, iure commodi dicta porro
      excepturi quam. Facere, commodi corrupti ipsam neque totam reprehenderit laboriosam laborum
      veniam est quo, repellat saepe impedit labore?
    </p>
    <!-- api response from server/api/ninja.js -->
    <p>api response:</p>
    <div>{{ data }}</div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>

<script setup>
// browser tab title & meta tags (overwrites the global ones in nuxt.config.js)
useHead({
  title: 'Nuxt | About',
  meta: [{ name: 'description', content: 'About Nuxt Merch' }],
})

// GET request
// const { data } = await useFetch('/api/ninja?name=mario')

// GET request
// const { data } = await useFetch('/api/ninja')

// GET request
const { data } = await useFetch('/api/currency/GBP')

// POST request
// const { data } = await useFetch('/api/ninja?name=mario', {
//   method: 'post',
//   body: { age: 30 },
// })
</script>
