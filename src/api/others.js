import request  from '@/utils/request'

// 获取统计数据
export function getStatistics() {
    return request(
        {
            url:'/data/statistics',
            method:'post',
        }
    )
}

// 获取期望和实际的一周的数据 rep = {expected:[],actual:[]}
export function getExpectedAndActual() {
    return request(
        {
            url:'/data/expectedAndActual',
            method:'post',
        }
    )
}

// 待办事项根据页码和每页数量获取 parms = {"page":1,pageSize:8}
export function getTodo(parms) {
    return request(
        {
            url:'/data/todo',
            method:'post',
            data:parms
        }
    )
}