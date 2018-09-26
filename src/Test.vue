<!--
* @Author: Zhang Guohua
* @Date:   2018-09-21 16:31:51
* @Last Modified by:   zgh
* @Last Modified time: 2018-09-26 15:18:35
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div id="test">
		<strong v-on:click="say">{{ msg }}</strong>
		<c-first></c-first>
	</div>
</template>

<script type="text/javascript">

	import C1 from './components/Components1.vue'
	import createView from './util/createComponent.js'

	// 在渲染之前，render 前将组件加入进来。
	export default {
		el: '#test',
		data () {
			return {
				msg: 'Hi Baby !'
			}
		},
		components: {
			'c-first': createView(C1)
		},
		methods: {
			say () {
				console.log('clicked');
				this.msg = 'hi';
			}
		}
	}
</script>