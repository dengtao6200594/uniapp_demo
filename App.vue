<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 修改iconfont.css里url路径 */
	@import "./static/iconfont/iconfont.css";
	.page {
		width: 100%;
		height: 100%;
		background: #f7f7f7;
	}
</style>
