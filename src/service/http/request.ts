import axios from './interceptors'
import qs from 'qs'

interface REQUEST {
  url: string
  data: any
}

export const POST = <T>(params:REQUEST): Promise<T> => {
  return axios({
    method: 'post',
    ...params
  })
}

export const GET = <T>(params: REQUEST): Promise<T> => {
  return axios({
    method: 'get',
    url: params.url,
    params: qs.stringify(params.data)
  })
}

export const PUT = <T>(params: REQUEST): Promise<T> => {
  return axios({
    method: 'put',
    url: `${params.url}/${params.data!.id}`
  })
}