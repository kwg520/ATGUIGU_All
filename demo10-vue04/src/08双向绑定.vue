<script setup>
import { reactive, ref } from "vue"

/*
   单项绑定  响应式数据发生变化时，更新dom树   用户的操作如果造成页面内容的改变不会影响响应数据

   双项绑定  响应式数据发生变化时，更新dom树   用户的操作如果造成页面内容的改变会影响响应数据
            双向绑定一般用于表达标签
            双向绑定也有人称呼为收集表单信息的命令
            v-model:value = "数据" 双向绑定
            v-model:value 一般都省略 :value
 */
let message = ref("张三")
let user = reactive({
    username: "",
    userPwd: "",
    intro: "",
    pro: "",
})

let hbs = ref([])

function clear() {
    user.username = ""
    user.userPwd = ""
    user.intro = ""
    user.pro = ""
    hbs.value.splice(0, hbs.value.length)
}

</script>

<template>
    <div>

        <div>
            用户名： <input type="text" v-model="user.username"><br>
            密码：<input type="password" v-model="user.password"><br>
            爱好：
            
            唱 <input type="checkbox" name="hobbies" v-model="hbs" value="sing">
            跳 <input type="checkbox" name="hobbies" v-model="hbs" value="dance">
            rap <input type="checkbox" name="hobbies" v-model="hbs" value="rap">
            <br>
            简介： <textarea v-model="user.intro"></textarea>
            <br>
            籍贯：
            <select v-model="user.pro">
                <option value="1">京</option>
                <option value="2">津</option>
                <option value="3">冀</option>
            </select>
            <button @click="clear()">清空</button>
            <br>
            {{ user }} <br>
            {{ hbs }}
        </div>

        <br>
        <input type="text" v-model="message">
        <br>
        {{ message }}
    </div>
</template>

<style scoped></style>
