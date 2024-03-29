// App
import { createApp } from 'vue'
import App from './App.vue'

// Router
import router from './router'

// Internationalisation 
import i18n from './locales/i18n.js'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})


createApp(App).use(router).use(vuetify).use(i18n).mount('#app')
