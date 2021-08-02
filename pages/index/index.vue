<template>
	<view class="page">
		首页
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="7000" :duration="1000">
			<swiper-item class="swiper_item" v-for="item in swiper" :key="item.id">
				<image class="swiper_item_img" :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<nav-list :navData="navData"></nav-list>
			<view class="iconfont icongongyeche"></view>
	</view>
</template>

<script>
	import navList from '@/pages/index/nav-list.vue'
	import {
		getlunbo
	} from '@/api/heima.js'

	export default {
		components:{
			navList
		},
		data() {
			return {
				swiper: [],
				navData:[{
					icon:'iconfont iconyoulanche1',
					title:'游览车'
				},{
					icon:'iconfont iconqingjieche',
					title:'清洁车'
				},{
					icon:'iconfont icongongyeche',
					title:'工业车'
				},{
					icon:'iconfont iconanfang',
					title:'安放车'
				}]
			}
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			getSwipers() {
				getlunbo().then(({
					message
				}) => this.swiper = message)
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		height: 380rpx;

		.swiper_item_img {
			width: 100%;
			height: 100%;
		}
	}
</style>
