import request from '@/utils/request'

// 登录 params = {username:"",password:""}
export function postLogin(params) {
    console.log(params)
    return request(
        {
            url:'/data/login',
            method:'post',
            data:params
        }
    )
}
