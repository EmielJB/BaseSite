<template>
  <div class="py-6 px-12 flex justify-between">
    <div>
      <Icon name="maki:mountain" size="48" />
    </div>
    <div>
    <NuxtLink to ="/auth/sign-in">
      <button class="bg-teal-600 hover:bg-teal-800 text-white px-4 py-1  rounded-full">
        Sign in
        <Icon name="carbon:login" size="24" />
      </button>
    </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>