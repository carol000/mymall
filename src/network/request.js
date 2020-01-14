import axios from "axios"

export function request(config) {
  //创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/hy',
    /* baseURL :  'http://106.54.54.237:8000/api/hy' */
    timeout: 5000
  })

  //拦截请求数据
  instance.interceptors.request.use(config => {
    //console.log(config);
    return config
  }, err => { console.log(err) })

  //拦截响应数据
  instance.interceptors.response.use(res => {
    //console.log(res);
    return res
  }, err => { console.log(err) })

  return instance(config);
}

