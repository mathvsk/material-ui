import axios from 'axios'
import { responseInterceptor } from './response-interceptor'
import { errorInterceptor } from './error-interceptor'
import { Environment } from '../../../environment'

const api = axios.create({
  baseURL: Environment.BASE_URL,
})

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
)

export { api }
