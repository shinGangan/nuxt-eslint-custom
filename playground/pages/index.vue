<script setup lang="ts">
const title = ref("Nuxt module playground! 🦒");

const showAlert = () => {
  alert("Hello, Nuxt module!");
};
</script>

<template>
  <div>{{ title }}</div>
  <button @click="showAlert">Show alert</button>
</template>
