<script setup>
  import { ref } from "vue";
  let counter = ref(0);
  function increment() {
    counter.value += 1;
  }
  function decrement() {
    counter.value -= 1;
  }
</script>

<template>
  <div>
    <button @click="decrement()">-</button>
    <span v-text="counter"></span>
    <button @click="increment()">+</button>
  </div>
</template>

<style scoped>
</style>
