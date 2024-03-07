<script setup>
let userName = window.sessionStorage.getItem('userName')
function clear(){
  window.sessionStorage.removeItem('userName')
}
</script>

<template>
  <div>
    home 
    <br>
    欢迎{{ userName }}的到来
    <button @click="clear">退出登录</button>
  </div>
</template>

<style scoped></style>
