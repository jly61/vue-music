// 补0函数
function addZero(value) {
    return value < 10 ? '0' + value : value
}
// 时间格式化
export function format(value) {
    //歌曲时长分数
    const minutes = Math.floor(value / 60);
    //歌曲时长秒速
    const seconds = value % 60;
    //补0
    return `${addZero(minutes)}:${addZero(seconds)}`
}

// 节流函数
let lastTime = 0;
export function throttle(func, wait) {
    let timer;
    return function () {
        clearTimeout(timer)
        let nowTime = new Date().getTime();
        console.log(nowTime, lastTime)
        if(nowTime - lastTime > wait) {
            func.apply(this, arguments);
            lastTime = nowTime;
        } else {
            timer = setTimeout(func, wait)
        }
    }
}
