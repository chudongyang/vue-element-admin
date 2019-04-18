import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import './permission';

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-CN';
import 'element-ui/lib/theme-chalk/index.css';
// 引入基础样式
import './assets/css/index.styl';
// 引入svg
import './assets/icons';

Vue.use(ElementUI, { locale });

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
