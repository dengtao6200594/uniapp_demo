<template>
	<view class="nav">
<!-- 		{{navData}} -->
		<view class="nav_item" v-for="item in navData" :key="item.title">
			<view :class="item.icon"></view>
			<text>{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'navList',
		props: {
			navData: {
				type:Array,
				required:true
			}
		}
	}
</script>

<style lang="scss">
	.nav{
		display: flex;
		background: #FFFFFF;
		.nav_item{
			flex: 1;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background: $shop-color;
				border-radius: 50%;
				line-height: 120rpx;
				margin: 10rpx auto;
				color: #FFFFFF;
				font-size: 45rpx;
			}
			text{
				font-size: 30rpx;
			}
		}
	}
</style>
