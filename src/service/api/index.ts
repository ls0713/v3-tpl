import { POST, GET,PUT } from '../http/request'

export default {
  getset() {
    POST({url: 'a', data: {a: 1}})
  }
}