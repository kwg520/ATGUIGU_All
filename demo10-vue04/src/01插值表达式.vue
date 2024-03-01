<script setup>
/*
  插值表达式 
 */
 
 //定义一些常见的类型的数据
 let msg = "hello vue3"
 let getMsg = () => {
     return "Hello vue3 message"
 }
 let age = 19
 let bee = "蜜蜂"
 let carts = [{name : "可乐", price : 3 ,number : 10}, {name : "薯片", price :6,number : 10}] 
 function compute(){
     let count  = 0
     for(let index in carts){
         count += carts[index].number
     }
 }

</script>

<template>
    <h1>{{ carts }}</h1>
 
</template>

<style scoped>
</style>
