//补0函数
function addZero(value) {
    return value < 10 ? '0' + value : value
}
//时间格式化
export function format(value) {
    //歌曲时长分数
    const minutes = Math.floor(value / 60);
    //歌曲时长秒速
    const seconds = value % 60;
    //补0
    return `${addZero(minutes)}:${addZero(seconds)}`
}
