<script setup>
/*
   v-text  v-text 不识别html结构的文本
   v-html  识别文本中的html代码的命令
   {{}} 插值表达式
   v-*** vue的指令
   1.命令必须依赖标签，在开始标签中使用
   
 */
 
 let msg = "hello Vue3"
 /* 命令中支持字符串模版 */
 let haha = "hello Vue3"
 let msg2 = `hello ${haha}`
 /* 命令中支持常见的预算表达式 */
 let age = 19
 let bee = "蜜 蜂"
 let getMsg = () => {
     return "hello"
 }
 let getMsg2 = "<font color = 'red'>saf</font>"
</script>

<template>
    <div>
        <h1 v-text="msg"></h1>
        <h1 v-text="haha"></h1>
        <h1 v-text="msg2"></h1>
        <h1 v-text="age>18 ?'成年':'未成年'"></h1>
        <h1 v-text="bee.split(' ').reverse().join('-')"></h1>
        <h1 v-text="getMsg()"></h1>
        <font color = 'red'>saf</font>
        <h1 v-html="getMsg2"></h1>
    </div>
 
</template>

<style scoped>
</style>
