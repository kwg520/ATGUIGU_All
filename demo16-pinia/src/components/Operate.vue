<script setup>
import { ref } from 'vue'
import { definedPerson } from '../store/store'
//读取存储的数据
let person = definedPerson()

// let hobby = ref('')

</script>

<template>
    <div>
        <h1>Operate 视图，用户操作pinia中的数据</h1>
        请输入姓名：<input type="text" v-model="person.username"><br>
        请输入年龄：<input type="text" v-model="person.age"><br>
        请增加爱好：
        <input type="checkbox" value="吃饭" v-model="person.hobbies"> 吃饭
        <input type="checkbox" value="睡觉" v-model="person.hobbies"> 睡觉
        <input type="checkbox" value="打豆豆" v-model="person.hobbies"> 打豆豆
        <input type="checkbox" value="唱歌" v-model="person.hobbies">唱歌
        <input type="checkbox" value="跳舞" v-model="person.hobbies">跳舞<br>

        <button @click="person.doubleAge()">年龄加倍</button>
        <button @click="person.$reset()">恢复默认值</button>
        <button @click="person.$patch({username:'奥特曼',age:100,hobbies:['晒太阳','打怪兽']})">变身奥特曼</button>
        <br>
        显示pinia中的person数据:{{ person }}

    </div>
</template>

<style scoped></style>
