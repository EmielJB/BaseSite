<template>
  <div>
    <VitePwaManifest />

    <NuxtPage v-if="show"/>
    <TheLoader v-else />
  </div>
</template>

<script setup lang="ts">
const show = shallowRef(false)

onMounted(async () => {


  setTimeout(() => show.value = true, 1000) 
})
</script>
