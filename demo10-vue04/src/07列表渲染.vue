<script setup>
import { reactive } from "vue"

/*
  
 */

let product = "产品"
let itemsOrigin = [
    {
        id: "item1",
        message: "薯片",
    },
    {
        id: "item2",
        message: "可乐",
    },
    {
        id: "item2",
        message: "炸鸡",
    }
]
let items = reactive(itemsOrigin)

let cartsOrigin = [
        {
            name: "可乐",
            price: 3,
            number: 10
        },
        {
            name: "薯片",
            price: 6,
            number: 12
        },
        {
            name: "炸鸡",
            price: 12,
            number: 2
        }
    ]
let carts = reactive(cartsOrigin)

//
function compute() {
    let total = 0
    for (let i = 0; i < carts.length; i++) {
        total += carts[i].price * carts[i].number
    }
    return total
}

function deleteCart(index) {
    carts.splice(index, 1)
}
function removeAll(){
    carts.splice(0,carts.length)
}


</script>

<template>
    <div>
        <div>
            <h1>您的购物车如下</h1>
            <table>
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>名称</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>小计</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody v-if="carts.length > 0">
                    <tr v-for="(cart, index) in carts" :key="index">
                        <td v-text="index + 1"></td>
                        <td v-text="cart.name"></td>
                        <td v-text="cart.price"></td>
                        <td v-text="cart.number"></td>
                        <td v-text="cart.price * cart.number"></td>
                        <td>
                            <button @click="deleteCart(index)">删除</button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="5">您的购物车为空</td>
                    </tr>
                </tbody>
            </table>
            购物车总金额{{ compute() }} 元
            <br>
            <button @click="removeAll()">一键清空</button>
        </div>

        <br><br><br><br><br><br><br><br><br><br>

        <ul>
            <li v-for="(item, index) in items" :key="item.id">
                {{ product + (index + 1) + item.message }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
