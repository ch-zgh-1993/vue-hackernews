/*
* @Author: Zhang Guohua
* @Date:   2018-09-26 14:51:35
* @Last Modified by:   zgh
* @Last Modified time: 2018-09-26 14:53:05
* @Description: create by zgh
* @GitHub: Savour Humor
*/

export default function createView(component){
	return {

	    render (h) {
	      	return h(component)
	    }
  }
}