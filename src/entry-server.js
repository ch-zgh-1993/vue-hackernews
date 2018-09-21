/*
* @Author: Zhang Guohua
* @Date:   2018-09-17 19:39:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-09-21 16:21:16
* @Description: create by zgh
* @GitHub: Savour Humor
*/
import { createApp } from './app'

const isDev = process.env.NODE_ENV !== 'production'

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default context => {
  return new Promise((resolve, reject) => {
    const s = isDev && Date.now()
    const { app } = createApp()

    const { url } = context

    return resolve(app);
  })
}
