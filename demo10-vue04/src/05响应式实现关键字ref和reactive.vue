<script setup>
/*
  让一个普通数据转换为响应式数据 两种方式
  1.ref函数    更适合单个变量
     在script 标签中操作ref响应式数据要通过.value
  2.reactive函数 更适合对象    
    在script template操作reactive 响应式数据都直接使用对象名.属性名的方式即可
 */
import { ref, reactive, toRef, toRefs } from 'vue';
let counter = ref(10)
function incr() {
  counter.value++
}
let personOrigin = {
  name: '张三',
  age: 18
}
let person = reactive(personOrigin);
//toRef 函数  将reactive响应式数据中的某个属性转换为ref响应式数据
let p_age = toRef(person, 'age')
function incrp_age() {
  p_age.value++
}
//toRefs函数  同时将reactive响应式数据的多个属性转换为ref响应式数据
let { name, age } = toRefs(person)
function incrP_age2() {
  age.value++
}
function incrAge() {
  person.age++
}

</script>

<template>
  <div>
    <button @click="incr()">+</button>
    <button @click="counter++">+</button>
    {{ counter }}
    <hr>
    <button @click="incrAge()">+</button>
    <button @click="person.age++">+</button>
    {{ person.age }}


    <button @click="incrp_age()">+</button>
    <button @click="incrP_age2()">+</button>
    {{ person.age }}
  </div>
</template>

<style scoped></style>
