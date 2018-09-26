<!--
* @Author: Zhang Guohua
* @Date:   2018-09-26 14:24:38
* @Last Modified by:   zgh
* @Last Modified time: 2018-09-26 15:00:00
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<p @on:click="click">{{ msg }}</p>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				msg: '我是一个组件'
			}
		},
		methods: {
			click () {
				this.msg = 'hi';
			}
		}
	}
</script>