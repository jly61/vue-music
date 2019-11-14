import axios from 'axios'

// 排行榜歌曲列表(正在播放)
export function topList(idx) {
    return axios.get('/api/top/list', {
        params: {
            idx
        }
    })
}
