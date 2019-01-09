import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import './assets/styles/global.scss';

Vue.config.productionTip = false

/*
* Coloca o axios como plugin no vue
* Basicamente estou colocando o axios como um método na instância do vue
* agora é possível fazer this.$api.get('/endpoint') e etc.
*/

Vue.use({
  install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'http://fighthub-api.herokuapp.com'
    })
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
