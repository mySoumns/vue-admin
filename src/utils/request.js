// import Vue from 'vue'
import axios from 'axios'
import { getString } from '@/utils/index'
import router from '@/router'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)

// export function requestGet(url,params){
//     return Vue.axios.get(url, {params})
//     .then(res => {
//       return res;
//     })
//     .catch(err => {
//         return err;
//     });
// }
// export function requestPost(url,params){
//     return Vue.axios.post(url, params)
//     .then(res => {
//       return res;
//     })
//     .catch(err => {
//       return err;
//     });
// }

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 根据环境设置域名
  timeout: 5000 // 请求超时时间
})

// 请求拦截
service.interceptors.request.use(
  res =>{
    if(!res.headers['Content-Type']){
      res.headers = {
        'Content-Type':'application/json',
      };
    }
    const token = getString('token');
    // 添加token到headers
    if(token){
      res.headers.token = token
    }
    return res;
  },
  error =>{

    return error;
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    //一些统一code的返回处理
    if(response.status === 401){
      // 登录验证
      router.push({
        path:'/login',//从哪个页面跳转
        query:{
          redirect:router.path
        }
      })
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
);
export default service;