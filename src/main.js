import { createApp } from 'vue';
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue';
import DeleteButton from './components/UI/DeleteButton.vue'


const app = createApp(App)
app.component('base-card', BaseCard)
app.component('delete-button', DeleteButton)


app.mount('#app');
