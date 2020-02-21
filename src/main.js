import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import EmailForm from '././components/EmailForm.vue';
import CardSection from '././components/CardSection.vue';

const routes = [
    {path: '/contact', component: EmailForm},
    {path: '/projects',component: CardSection},
    

]

const router = new VueRouter({
    routes
})
Vue.config.productionTip = false



new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
