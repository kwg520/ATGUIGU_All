import { defineStore } from 'pinia'

//定义数据并且对外暴露
//store 就是定义共享状态的包装对象
//内部包含四个属性 ： id 唯一标识  state 完整类型推理,推荐使用箭头函数  存放的数据 getters 类似属性计算，存储放对数据
//操作的方法 actions 存储数据的复杂业务逻辑方法
// 理解： store 类似java中的实体类，id是类名，state就是装数据值的属性 getters就是get方法 ，actions就是对数据操作的其他方法
export const definedPerson = defineStore({

    id: 'person',
    state: () =>{
        return {
            username: '张三',
            age: 0,
            hobbies:['唱歌','跳舞']
        }
    },
    getters:{
        getHobbiesCount(){
            return this.hobbies.length
        },
        getAge(){
            return this.age
        }
    },
    actions:{
      doubleAge(){
        this.age = this.age * 2
      }
    },
})
