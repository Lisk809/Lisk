<template>
  <div class="mt-15">
    <p
      class="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-line:tracking-widest"
    >
      “ {{ word }}
    </p>
    <p align="right">——{{ from }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const word = ref('')
const from = ref('')
fetch('https://v1.hitokoto.cn/')
  .then((e) => e.json())
  .then((data) => {
    word.value = data.hitokoto
    from.value = data.from
  })
</script>
