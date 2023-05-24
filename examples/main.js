import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import swiperSimple from './../packages/index'
// 注册组件库
console.log(swiperSimple);

Vue.use(swiperSimple)
new Vue({
  render: h => h(App)
}).$mount("#app");
