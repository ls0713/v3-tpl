import Axios from 'axios'

interface response {
  data: any
  code: number
  msg: string
}
Axios.defaults.timeout = 1500

Axios.defaults.baseURL = process.env.VITE_BASE_URL

Axios.interceptors.request.use(function <T>(config: T):T {
  return config
}, function (error):Promise<any> {
  return Promise.reject(error)
})

Axios.interceptors.response.use((response) => {
  return response
},function (error) {
  console.log(error, '============')
  return Promise.reject(error)
})

export default Axios