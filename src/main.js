import './assets/scss/bootstrap.scss'

import Vue from 'vue'
import app from './app.vue'
import router from './router'
import store from './store'
import i18n from './common/i18n'
import './components'

var theme = localStorage.getItem('theme')

if (!theme) {
    localStorage.setItem('theme', 'light')
}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(app),
}).$mount('#app')
