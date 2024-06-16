import { createApp } from 'vue'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'

const app = createApp(App)

// Create a Pinia instance
const pinia = createPinia()

// Use the Pinia instance in the app
app.use(pinia)
app.use(router)
app.use(Quasar, {
  plugins: {} 
})

app.mount('#app')
