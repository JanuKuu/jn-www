import { createApp } from 'vue'
import Main from './Main.vue'
import './style.css'

export const main = createApp(Main);

main.mount('#my-site')
