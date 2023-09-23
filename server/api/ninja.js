// useQuery function name changed to getQuery and also useBody name changed to readBody

// For me it works with:  "const { name } = getQuery(event)" and  "const { age } = await readBody(event)"

// Server route doesn't work either with Nuxt 3.2.0. Instead, move /server/api/ninja.js into /server/api/ninja/index.js.

// event holds information aboput the request
export default defineEventHandler(async (event)  => {
// export default defineEventHandler(() => {

  // handle query params
  // const { name } = getQuery(event)

  // handle post data
  // const { age } = await readBody(event)

  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`
  // }

  // return {
  //   message: `Hello, Ninjas`,
  // }

  // api call with private key (use $fetch on server routes)
  const { data } = await $fetch(
    // sensitive data API key removed
  )

  return data
})
