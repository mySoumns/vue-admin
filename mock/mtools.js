
// localStorage 存储数组对象的方法
export function saveObjArr(name, data) {
    localStorage.setItem(name, JSON.stringify(data))
}

// localStorage 获取数组对象的方法
export function getObjArr(name) {
    return JSON.parse(window.localStorage.getItem(name));

}

// localStorage 存储字符串的方法
export function saveString(name, str) {
    localStorage.setItem(name, str);
}

// localStorage 获取字符串的方法
export function getString(name) {
    return window.localStorage.getItem(name);
}