
export default defineNuxtPlugin(() => {
  
  const client = useSupabaseClient()

  const signInWithEmail = async (email: string, password: string) => {
    return new Promise(async (resolve, reject) => {
      email || reject({
        email: "Email is required",
      }) 
      const { data, error } = await client.auth.signInWithPassword({
        email,
        password,
      })

      error ? reject({
        message: error.message,
      }) : resolve(data)
    })
  }

  return {
    provide: {
      signInWithEmail
    }
  }
})
