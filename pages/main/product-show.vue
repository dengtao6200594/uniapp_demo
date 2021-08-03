<template>
	<view class="good_lists">
		<view class="good_item" v-for="list in goodLists" :key="list.id">
			<image class="good_pic" :src="src" mode="aspectFit"></image>
			<view class="content">
				<view class="price">
					<text>￥{{list.sell_price}}</text>
					<text>￥{{list.market_price}}</text>
				</view>
				<view class="name">
					{{list.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'productShow',
		props: {
			goodLists: Array
		},
		data() {
			return {
				src: Object.freeze(
					'https://gw.alicdn.com/bao/uploaded/i1/O1CN01BBre7H1rsEhZp6akm_!!6000000005686-0-yinhe.jpg_360x10000Q75.jpg_.webp'
				)
			}
		}
	}
</script>

<style lang="scss">
	.good_lists {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.good_item {
			background: #FFFFFF;
			width: 355rpx;
			margin: 10rpx 0;
			height: 450rpx;
			padding: 10rpx 0;

			.good_pic {
				width: 80%;
				height: 60%;
			}

			.price {
				color: $shop-color;
				font-size: 36rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}
		}
	}
</style>
