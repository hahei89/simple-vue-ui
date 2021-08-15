import Vue from 'vue'
import App from './App.vue'
import SimpleButton from './components/button.vue'
import './assets/fonts/iconfont.css'
Vue.component(SimpleButton.name, SimpleButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
