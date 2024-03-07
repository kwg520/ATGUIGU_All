<script setup>
/* 
  接收传递过来的路径参数
  useRote 函数是用来接收参数

  route.params 表示路径参数
  route.query 表示键值对参数
  */

import { useRoute } from 'vue-router'
import { ref, onUpdated } from 'vue'

let languageId = ref(0)
let languageName = ref("")

let route = useRoute()
languageId.value = route.params.id
languageName.value = route.params.language

onUpdated(() => {
   languageId.value = route.params.id
   languageName.value = route.params.language
})

</script>

<template>
   <div>
      <h1>showDeatail接受路径参数{{ languageId + languageName }}</h1>
   </div>
</template>

<style scoped></style>
