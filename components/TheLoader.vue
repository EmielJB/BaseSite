<template>
  <div 
      class="
          fixed 
          bg-teal-400/40 
          inset-0 
          w-full 
          z-40 
          flex 
          items-center 
          justify-center 
          h-[100vh]
          overflow-hidden
      "
  >
      <div class="relative p-3 rounded-md bg-teal-600 aspect-square h-64 text-white flex flex-col justify-evenly items-center">
        
        <Icon name="maki:mountain" size="30" class="absolute text-teal-900" />
        
        <Icon name="eos-icons:loading" size="100" class="absolute"/>
      </div>
  </div>
</template>

<script setup lang="ts"></script>