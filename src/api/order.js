import request  from '@/utils/request'

// 订单列表根据页码和每页数量获取 parms = {"page":1,pageSize:8}
export function getOrderList(parms) {
    return request(
        {
            url:'/data/orderlist',
            method:'post',
            data:parms
        }
    )
}