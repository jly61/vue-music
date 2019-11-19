import axios from 'axios'

// 排行榜歌曲列表(正在播放)
export function topList(idx) {
    return axios.get('/api/top/list', {
        params: {
            idx
        }
    })
}

// 获取热门搜索列表
export function hotSearch() {
    return axios.get('/api/search/hot')
}

// 搜索歌曲
export function search(keyword, page = 0, limit = 30) {
    return axios.get('/api/search', {
        params: {
            offset: page * limit,
            // 返回数量
            limit: limit,
            keywords: keyword,
        }
    })
}
