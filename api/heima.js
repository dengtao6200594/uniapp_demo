import request from '@/utils/request.js'
// 轮播图接口
export const getlunbo = () => request({
	url: '/api/getlunbo'
})
// 获取商品列表
export const getGoods = data => request({
	url: '/api/getgoods?pageindex=number',
	data
})
