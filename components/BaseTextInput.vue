<template>
  <div class="w-full h-20">
      <client-only>
          <input 
              :placeholder="placeholder"
              :maxlength="max"
              class="
                  w-full
                  bg-teal-100
                  text-gray-800
                  border
                  text-sm
                  border-teal-200
                  rounded-lg
                  p-3
                  placeholder-gray-700
                  focus:outline-none
                  shadow-lg
              " 
              @focus="isFocused = true"
              @blur="isFocused = false"
              :class="
                  {'border-teal-900': isFocused},
                  {'border-red-500': error}
              "
              :type="inputType"
              v-model="inputComputed"
              autocomplete="off"
          >
      </client-only>
      <span v-if="error" class="text-red-500 flex items-center mt-2 ml-3 text-[14px] font-semibold">
        <Icon name="carbon:warning" size="16" class="mr-2"/>{{ error }}
      </span>
  </div>
                  
</template>

<script setup>
  const emit = defineEmits(['update:input'])
  const props = defineProps(['input', 'placeholder', 'max', 'inputType', 'error'])
  const { input, placeholder, max, inputType, error } = toRefs(props)
  let isFocused = ref(false)
  const inputComputed = computed({
      get: () => input.value,
      set: (val) => emit('update:input', val)
  })
</script>