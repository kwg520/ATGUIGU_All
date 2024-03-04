<script setup>
import { reactive, ref, toRef, watch, watchEffect } from "vue";

/*
    数据监听器
 */
let firstname = ref("李")
let person = reactive({
    lastName: "小花",
    age:10
})


let p_age  = toRef(person,'age')

let fullname = ref("")

//任何的响应式数据 ，如果监听，直接监听即可，无需将要需监听的响应式数据作为参数
watchEffect(()=>{
    fullname.value = firstname.value + person.lastName
})


/* watch(firstname, (newValue, oldValue) => {
    fullname.value = `"${firstname.value} + ${person.lastName}"`
}) */

//watch 函数监听一个reactive 响应式数据 ，专门监听reactive响应数据中的一个属性
/* watch(() => person.lastName, (newValue, oldValue) => {
    // fullname.value = `"${firstname.value} + ${person.lastName}"`
    console.log(`"${firstname.value} + ${newValue}"`)
}) */

/* watch(() => person, (newValue, oldValue) => {
    // fullname.value = `"${firstname.value} + ${person.lastName}"`
    console.log(`"${firstname.value} + ${person.lastName}"`)
},{deep: true,immediate: true}) */

function add(){
    p_age.value++
}

</script>

<template>
    <div>
        <input type="text" v-model="firstname"><br>

        <input type="text" v-model="person.lastName"><br>
        {{ fullname }}
        <br>
    
        <button  @click="add()">点击我</button>
        {{ person.age }}
    </div>
</template>

<style scoped></style>
