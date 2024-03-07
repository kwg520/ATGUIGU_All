<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
let message = ref("")
const router = useRouter()
function goPage(){
  //编程式路由实现页面跳转
  //  router.push("/list")
  // router.push({path:"/list"})
  router.push(message.value)
}
</script>

<template>
   <div>
    App开始内容
    <br>
    <router-link to="/home">home页</router-link>
    <br>
    <router-link to="/list">list页</router-link>
    <br>
    <router-link to="/update">update页</router-link>
    <br>
    <router-link to="/add">add页</router-link>
    <hr>
    <!-- 该标签会被替换成具体的.vue -->
    默认
    <router-view></router-view>
    <button @click="goPage()">跳转</button>
    <br>
    <input type="text" v-model="message"> 
    <hr>
    App结尾内容
  </div>
</template>

<style scoped>

</style>
