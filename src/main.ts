import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import './assets/main.css'
import router from './routes';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)

app.use(createPinia())

app.use(vuetify)

app.use(router)

app.mount('#app')
