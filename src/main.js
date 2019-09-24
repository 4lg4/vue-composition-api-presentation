import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ElUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
