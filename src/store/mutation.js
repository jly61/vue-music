const mutations = {
    changePlay(state, tru) {
        state.playing = tru || !state.playing
    },
    getCurrentMusicInfo(state, item) {
        state.currentMusicInfo = item;
        state.duration = item.dt
        // state.currentMusicInfo = index;
    },
    getPlayList(state, list) {
        state.playList = list;
    },
    getCurrentMusicIndex(state, index) {
        state.currentMusicIndex = index
    },
    prevMusic(state, flag) {
        if (flag === 'prev') {
            state.currentMusicIndex = state.currentMusicIndex - 1;
        } else {
            state.currentMusicIndex = state.currentMusicIndex + 1;
        }
        state.currentMusicInfo = state.playList[state.currentMusicIndex]
    }
};

export default mutations
