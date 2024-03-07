<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let userName = ref("")
let userPwd = ref("")
const router = useRouter()
function login() {
  if (userName.value == 'root' && userPwd.value == '1234') {
    window.sessionStorage.setItem('userName', userName.value)
    router.push({ path: '/home' })
  } else {
    alert("用户名错误!")
  }
}
function clear() {
  window.sessionStorage.removeItem('userName')
}
</script>

<template>
  <div>
    账号：<input type="text" v-model="userName" placeholder="请输入账号">
    <br>
    密码：<input type="password" v-model="userPwd" placeholder="请输入密码">
    <br>
    <button @click="login">登录</button>
    <br>
    <button @click="clear">清除数据</button>
  </div>
</template>

<style scoped></style>
