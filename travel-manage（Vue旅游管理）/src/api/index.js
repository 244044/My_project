import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:1193/api',
  timeout: 1000
})
export default request
