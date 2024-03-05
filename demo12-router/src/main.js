import { createApp } from 'vue'
import App from './App.vue'
//在整个App.vue 中可以使用路由
import router from './routers/router'
const app = createApp(App)
app.use(router)
app.mount('#app')
