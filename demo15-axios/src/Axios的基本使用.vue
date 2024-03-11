<script setup>
import  axios  from 'axios'

function getLoveMessage() {
  //使用axios 发送请求获取土味情话
  let formData = new FormData()
  formData.append('username2', 123456)
  formData.append('username', 123456)
  let promise = axios({
    method: 'post',
    data: formData,
    url: 'https://api.uomg.com/api/rand.qinghua?format=json',
    // data: {
    //   username:'123456',
    //   username2:'123456',
    // },
    headers: {
      'Content-Type': 'multipart/form-data'
    }

  })

  promise.then(function (response) {
    console.log(response)
  }).catch(function (response) {

  })
}
</script>

<template>
  <div>
    <h1></h1>
    <button @click="getLoveMessage">刷新</button> 
  </div>
</template>

<style scoped></style>
