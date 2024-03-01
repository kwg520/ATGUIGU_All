<script setup>
/*
  属性渲染命令
  v-bind 将数据绑定在元素的属性上
  v-bind  v-bind:属性名="值"
  v-bind  :属性名="值"
 */

const data = {
    logo: "http://www.atguigu.com/images/logo.png",
    name: "张三",
    age: 18,
    address: "北京市朝阳区", url: "http://www.atguigu.com"
}


</script>

<template>
    <a :href="data.url">
        <img :src="data.logo" :title="data.name">
    </a>
</template>

<style scoped></style>
