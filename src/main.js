import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import theComponent from 'test-npm-mozzaray'



const app = createApp(App);
app.use(theComponent).mount('#app');             