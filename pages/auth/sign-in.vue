<template>
  <FrontEndLayout>
    <div class="h-full w-full flex flex-col md:flex-row items-center md:justify-between">
      <div class=" md:w-2/3 px-6">
        <h1 class="py-12 ml-4 text-6xl text-teal-600 font-bold leading-none">
          Sign in to the Base Site platform
        </h1>
      </div>
      <div class="w-[300px]  md:w-1/3 px-6 ">
        <p class="w-full text-center text-teal-600 leading-none mb-6">
          Sign in with
        </p>
        <button 
          class="
          mb-20
            flex 
            items-center 
            justify-center
            p-1.5
            w-full 
            border 
            hover:bg-gray-100
            rounded-full
            text-lg
            font-semibold
          "
        >
            <img class="w-full max-w-[30px]" src="../../assets/images/google-logo.png">
            <div>Google</div>
        </button>
        <p class="w-full text-center text-teal-600 leading-none mb-6">
          or
        </p>
        <form class="w-full space-y-6" @submit.prevent="onSubmit()">
          <BaseTextInput
            v-model:input="email"
            placeholder="Enter your email"
            input-type="email"
            :error="errors && errors.email ? errors.email : ''"
          />
          <BaseTextInput
            v-model:input="password"
            placeholder="Enter your password"
            input-type="password"
            :error="errors && errors.password ? errors.password : ''"
          />
          <button class="bg-teal-600 hover:bg-teal-800 text-white px-4 py-1  rounded-full">Sign in <Icon name="carbon:login" size="24" /></button>
          <div v-if="errors?.message" class="text-red-500 flex items-center  text-[14px] font-semibold">
              <Icon name="carbon:warning" size="16" class="mr-2"/>
              {{ errors.message }}
          </div>
        </form>
      </div>
    </div>
    
    
    
  </FrontEndLayout>
</template>

<script setup>
import FrontEndLayout from '@/layouts/FrontEndLayout.vue'
import auth from '@/plugins/auth'

let email = shallowRef(null)
let password = shallowRef(null)
let errors = ref(null)

const onSubmit = async () => {
  try {
    const data = await auth().provide.signInWithEmail(email.value, password.value)
    console.log("Data", data)
  } catch (err) {
    console.log("Error", err)
    errors.value = err
  }
}

watch([email, password], () => {
  errors.value = null
})
</script>
