<template>
	<view class="page">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="7000" :duration="1000">
			<swiper-item class="swiper_item" v-for="item in swiper" :key="item.id">
				<image class="swiper_item_img" :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<nav-list :navData="navData"></nav-list>
		<!-- 商品展示区 -->
		<view class="product_show">
			<view class="product_show_title">推荐商品</view>
			<product-show :goodLists="goodLists"></product-show>
		</view>

	</view>
</template>

<script>
	import navList from '@/pages/main/nav-list.vue'
	import productShow from '@/pages/main/product-show.vue'
	import {
		getlunbo,
		getGoods
	} from '@/api/heima.js'

	export default {
		components: {
			navList,
			productShow
		},
		data() {
			return {
				swiper: [],
				navData: [{
					icon: 'iconfont iconyoulanche1',
					title: '游览车'
				}, {
					icon: 'iconfont iconqingjieche',
					title: '清洁车'
				}, {
					icon: 'iconfont icongongyeche',
					title: '工业车'
				}, {
					icon: 'iconfont iconanfang',
					title: '安放车'
				}],
				goodLists: []
			}
		},
		onLoad() {
			this.getSwipers()
			this.getGoodLists()
		},
		methods: {
			getSwipers() {
				getlunbo().then(({
					message
				}) => this.swiper = message)
			},
			getGoodLists() {
				getGoods({
					pageindex: 1
				}).then(({
					message
				}) => {
					this.goodLists = message
					console.log(message)
				})
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

	.product_show {
		background: #eee;
		margin: 20rpx 0;

		.product_show_title {
			height: 100rpx;
			line-height: 100rpx;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20rpx;
			background: #fff;
			margin: 20rpx 0;
		}
	}
</style>
