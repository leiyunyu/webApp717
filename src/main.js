import './common/fonts1/iconfont.css';
import Vue from 'vue';
import axios from './http/axios.js';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router/config.js';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './assets/css/swiper.min.css';
import message from './plugins/message';
import loading from './plugins/loading';
import { store } from './store/store.js';
Vue.use(loading);
Vue.use(message);
Vue.use(Mint);
Vue.use(VueRouter);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
