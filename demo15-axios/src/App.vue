<script setup>
import  request  from './axios'
import { reactive } from 'vue';

let message = reactive({
  "code": 1,
  "content": ""
})
function getLoveWords() {
  //使用axios 发送请求获取土味情话
  //  return axios({
  //   method: 'get',
  //   url: 'https://api.uomg.com/api/rand.qinghua',
    
  //   data:{

  //   },
  //    params: {
  //     format: 'json',
  //     username:'zhangsan',

  //    },
  //  })

  //  axios.get(url)
  //  axios.get(url,{})
  //  axios.get(url,{params: {},headers:{}})

//  return axios.post("https://api.uomg.com/api/rand.qinghua",{
//       username:'zhangsan',
//       userpws:"xxx"
//   },
//   {
//     params:{
//       format:'json'
//     },
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   })

  return request.get("api/rand.qinghua?format=json")
}

async function getLoveMessage() {
  let {data} = await getLoveWords()
  Object.assign(message,data)
}

</script>

<template>
  <div>
    <h1>{{ message.content }}</h1>
    <button @click="getLoveMessage">刷新</button> 
  </div>
</template>

<style scoped></style>
