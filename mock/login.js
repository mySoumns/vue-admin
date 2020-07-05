import Mock from 'mockjs' // 引入mockjs
import { saveString } from './mtools'

export default (()=> {
    const userMap = new Map();
    userMap.set('test1', '123456');
    userMap.set('test2', '789456');

    // 验证用户密码
    function login({ username, password }) {
        if (userMap.has(username)) {
            if (userMap.get(username) == password) {
                const token = Mock.Random.guid();
                saveString("serToken",token);
                return {
                    status: 1,
                    msg: "登录成功",
                    token:token,
                }
            }
        }
        return {
            status: 1,
            msg: "账号或者密码错误"
        }
    }

    Mock.mock('/data/login', 'post', function (option) {
        return login(JSON.parse(option.body))
    })
})();

