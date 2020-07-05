import Mock from 'mockjs' // 引入mockjs

export default (() => {
    // 生成订单数据
    function orderlist({ pageSize }) {
        return Mock.mock({
            [`list|${pageSize}`]: [
                {
                    'name':'@ctitle(10,20)',
                    'orderId':'@natural(48800000000000000,48900000000000000)',
                    'price':'@float(1000,5000,2,2)',
                    'state':'@natural(0,1)'
                }
            ]
        })
    }

    // 获取订单列表 根据页码和大小
    Mock.mock('/data/orderlist', 'post', function (option) {
        return orderlist(JSON.parse(option.body));
    })

})(); 