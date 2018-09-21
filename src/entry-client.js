/*
* @Author: Zhang Guohua
* @Date:   2018-09-17 19:39:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-09-21 17:10:06
* @Description: create by zgh
* @GitHub: Savour Humor
*/
import Vue from 'vue'
import 'es6-promise/auto'
import { createApp } from './app'

const { app } = createApp()

// service worker
if ('https:' === location.protocol && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}
