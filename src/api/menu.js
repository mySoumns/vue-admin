import request  from '@/utils/request'

// 登录 params = {username:"",password:""}
export function getMenu() {
    return request(
        {
            url:'/data/menu',
            method:'get',
        }
    )
}