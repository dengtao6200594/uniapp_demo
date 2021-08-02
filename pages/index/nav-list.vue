<template>
	<view class="nav">
<!-- 		{{navData}} -->
		<view class="nav_item" v-for="item in navData" :key="item.title">
			<view :class="item.icon">{{item.icon}}</view>
			<text>{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'navList',
		props: {
			navData: Array
		}
	}
</script>

<style>
</style>
