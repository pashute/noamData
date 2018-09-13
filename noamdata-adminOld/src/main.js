import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import './plugins/axios'

Vue.config.productionTip = false
Vue.use(Vuetify)

sync(store, router)
new Vue({
    router,
    store, 
    render: h => h(App)
}).$mount('#app')
// router.start(App, '#app')