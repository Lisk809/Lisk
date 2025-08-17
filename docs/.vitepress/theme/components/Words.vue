<template>
  <div class="mt-15">
    <p class="word"
    >“ {{ word }}
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
<style>
.word::first-letter {
  float:left;
  margin-right:3px;
  font-size:2rem;
  font-weight:bold;
}
</style>