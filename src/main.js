import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './assets/scss/main.scss';
import axiosInstance from './plugins/axios';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use(axiosInstance);
