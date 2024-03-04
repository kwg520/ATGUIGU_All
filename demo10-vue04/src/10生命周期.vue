<script setup>
/*
  生命周期
 */
import { ref ,onBeforeMount,onMounted,onBeforeUpdate,onUpdated } from 'vue';

//挂载之前
onBeforeMount(()=>{
console.log("--------onBeforeMount----------------")
console.log(document.getElementById("s1"))
})

//挂载完成
onMounted(()=>{
    console.log("--------onMounted----------------")
    console.log(document.getElementById("s1"))
    
})

//更新之前
onBeforeUpdate(()=>{
    console.log("--------onBeforeUpdate----------------")
    let s1 = document.getElementById("s1")
    console.log(message.value,s1.innerText)
})

//更新完成
onUpdated(()=>{
    console.log("--------onUpdated----------------")
    console.log(message.value,s1.innerText)

})

let message = ref(1)

</script>

<template>
    <div>
        <span id="s1" >{{ message }}</span>
        <button @click="message++">点击</button>
    </div>
</template>

<style scoped></style>
