const BASE_URL='http://localhost:8082'

const request = options => new Promise((resolve,reject)=>{
	uni.request({
		url: `${BASE_URL}${options.url}`,
		method: options.method || 'GET',
		data: options.data || {},
		success: ({data}) => {
			if(data.status !== 0) return uni.showToast({title:'接口请求失败'})
			resolve(data)
		},
		fail:err=> {
			uni.showToast({title:'请求接口失败'})
			reject(err)
		}
	})
})

export default request