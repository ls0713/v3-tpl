import Axios from 'axios'

interface response {
  data: any
  code: number
  msg: string
}
Axios.defaults.timeout = 1500

Axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

Axios.interceptors.request.use(function <T>(config: T):T {
  return config
}, function (error: any):Promise<any> {
  return Promise.reject(error)
})

Axios.interceptors.response.use((response: {data: {[x:string]: any}}) => {
  return response
},function (error: any) {
  return Promise.reject(error)
})

export default Axios
