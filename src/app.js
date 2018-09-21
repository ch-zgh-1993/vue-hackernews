/*
* @Author: Zhang Guohua
* @Date:   2018-09-19 11:23:07
* @Last Modified by:   zgh
* @Last Modified time: 2018-09-21 16:02:54
* @Description: create by zgh
* @GitHub: Savour Humor
*/
import Vue from 'vue'
import App from './App.vue'


// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app }
}
