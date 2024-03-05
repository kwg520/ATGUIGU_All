<script setup>
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
    <router-view>

    </router-view>
    <!-- <hr>
    home页
    <router-view name="homeView"></router-view>
    <hr>
    list页
    <router-view name="listView"></router-view>
    <hr>
    update页
    <router-view name="updateView"></router-view>
    <hr>
    add页面
    <router-view name="addView"></router-view> -->
  
    <hr>
    App结尾内容
  </div>

</template>

<style scoped>

</style>
