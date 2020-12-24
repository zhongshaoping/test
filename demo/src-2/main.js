// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import axios from 'axios'
Vue.config.productionTip = false

//声明使用插件
Vue.use(VueResource) //内部会给vm对象和组件对象添加一个属性：$http
Vue.prototype.axios=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
