<script setup>

import { ref } from 'vue'
let flag = ref(false)


/*
v-if = "表达式/数据" 数据为true 则当前元素会渲染进入dom树
v-else 自动和前一个v-if做取反操作

v-show=" " 数据为true 元素则展示在页面上 ，否则不展示 

v-if  数据为false时，元素则不在dom树中了
v-show 数据为false时，元素仍在dom树中，通过display 的csso样式控制元素隐藏
频繁切换，用v-show，很少改变用v-if
 */


</script>

<template>
  <div>
    <h1 id="ha" v-if="flag">vue is awesome!</h1>
    <h1 id="hb" v-else>oh no</h1>
    <h1 id="hc" v-show="flag">hc hc hc</h1>
    <button @click="flag = !flag">点击我</button>
  </div>
</template>

<style scoped></style>
