const mutations = {
    changePlay(state, tru) {
        state.playing = tru || !state.playing
    },
    getCurrentMusicInfo(state, item) {
        state.currentMusicInfo = item
    },
    // getCurrentMusicUrl(state, id) {
    //     state.currentMusicUrl = `https://music.163.com/song/media/outer/url?id=${id}`
    // }
};

export default mutations
