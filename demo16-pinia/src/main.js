import { createApp } from 'vue'
import  { createPinia }  from 'pinia'

import App from './App.vue'
import router from './routers/router'

let pinia = createPinia()
let app = createApp(App)
app.use(router)
//app中使用pinia功能
app.use(pinia)
app.mount('#app')
