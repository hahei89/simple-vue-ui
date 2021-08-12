import Vue from 'vue'
import App from './App.vue'
import SimpleButton from './components/button.vue'

Vue.component(SimpleButton.name, SimpleButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
