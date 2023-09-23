export default defineEventHandler(async (event) => {
console.log(event);

// grab the route parameter server/api/currency/[code].js
const { code } = event.context.params
// destructure the runtime config and ENV variables from nuxt.config.ts
const { currencyKey } = useRuntimeConfig()
// make the GET request from pages/about.vue
const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`

const { data } = await $fetch(uri)

return data
})