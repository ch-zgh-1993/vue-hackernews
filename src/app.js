/*
* @Author: Zhang Guohua
* @Date:   2018-09-19 11:23:07
* @Last Modified by:   zgh
* @Last Modified time: 2018-09-21 17:04:56
* @Description: create by zgh
* @GitHub: Savour Humor
*/
import Vue from 'vue'
import App from './App.vue'
import Test from './components/test'


// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    render: h => h(App)
  })

  // 去除 router ,自定义 router ,便于了解 router
  // 增加自定义页面
  // 
  // 返回路由对象，由此判断返回哪个页面
  // 
  let myRouter = {
    "/": app,
    "/test": Test
  };

  return { myRouter }

}
