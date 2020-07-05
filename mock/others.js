import Mock from 'mockjs' // 引入mockjs

export default (() => {

    // 统计数据
    function statisticsData() {
        return [
            {
                name: 'userCount',
                num: Mock.Random.natural(10, 100000)
            },
            {
                name: 'incomeCount',
                num: Mock.Random.float(10000, 10000000, 2, 2)
            }
            , {
                name: 'massageCount',
                num: Mock.Random.natural(1000, 1000000)
            }
            , {
                name: 'indentCount',
                num: Mock.Random.natural(10, 100000)
            }
        ]
    }

    // 统计数据
    Mock.mock('/data/statistics', 'post', function () {
        return statisticsData();
    })

    // 获取期望和实际的一周的数据 生成一个数组
    function expectedAndActual() {
        let expected = [];
        let actual = [];
        let i = 1;
        while (i < 8) {
            expected.push(Mock.Random.natural(200, 300))
            actual.push(Mock.Random.natural(200, 300))
            i++;
        }
        return {
            expected: expected,
            actual: actual,
        }
    }

    // 获取期望和实际的一周的数据
    Mock.mock('/data/expectedAndActual', 'post', function () {
        return expectedAndActual();
    })

    // 生成待办事项
    function todo({ pageSize }) {
        return Mock.mock({
            [`list|${pageSize}`]: [
                {
                    'name':'@ctitle(10,20)'
                }
            ]
        })
    }

    // 获取待办数据
    Mock.mock('/data/todo', 'post', function (option) {
        return todo(JSON.parse(option.body));
    })

})(); 