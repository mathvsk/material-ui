import axios from 'axios'
import { responseInterceptor } from './response-interceptor'
import { errorInterceptor } from './error-interceptor'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
)

export { api }
