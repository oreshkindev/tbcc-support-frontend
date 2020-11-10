import Vue from 'vue'
import app from './app.vue'
import router from './router'
import store from './store'
import VueSimpleWebSocket from 'vue-simple-websocket'

import './registerServiceWorker'

Vue.use(VueSimpleWebSocket, 'wss://domain/api/v1/websocket/', {
    reconnectEnabled: true,
    reconnectInterval: 3000 // time to reconnect in milliseconds
})

Vue.config.productionTip = false

window.onpopstate = function() {
    document.body.classList.add('clear')
    setTimeout(() => {
        document.body.classList.remove('clear')
    }, 500)
}

new Vue({
    router,
    store,
    render: h => h(app)
}).$mount('#app')
