const BASE_URL:string='http://localhost:8082'
interface Options{
	url:string,
	method?:string,
	data?:unknown
}

//  这个返回值类型怎么写，还是不写？
export const request = options:Options => new Promise(()=>{
	uni.request({
		url: `${BASE_URL}${optios.url}`,
		method: options.method || 'GET',
		data: options.data || {},
		success: ({data}) => {
			if(data?.status !== 0) return uni.showToast({title:'接口请求失败'})
			resolve(data)
		},
		fail:err=> return uni.showToast({title:'请求接口失败'})
	})
})
