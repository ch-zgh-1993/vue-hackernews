/*
* @Author: Zhang Guohua
* @Date:   2018-09-19 14:13:46
* @Last Modified by:   zgh
* @Last Modified time: 2018-09-21 10:44:43
* @Description: create by zgh
* @GitHub: Savour Humor
*/
function getTitle (vm) {
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}

const serverTitleMixin = {
  created () {
    const title = getTitle(this)
    if (title) {
      this.$ssrContext.title = `Vue HN 2.0 | ${title}`
    }
  }
}

const clientTitleMixin = {
  mounted () {
    const title = getTitle(this)
    if (title) {
      document.title = `Vue HN 2.0 | ${title}`
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin
