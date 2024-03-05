<script setup>
//接收父组件的 参数
// let ss = ""
defineProps({
  message:String
})
</script>

<template>
  <div>
    {{ message }}
  </div>
</template>

<style scoped>
</style>
