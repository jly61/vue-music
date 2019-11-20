<template>
    <div class="playlist">
        <music-list :list="playlist" :listType="1"></music-list>
    </div>
</template>

<script>
    import musicList from '../../components/music-list/music-list'
    import {topList} from "@/api";
    import {formatTopSongs} from "@/utils/song";

    export default {
        name: "playList",
        data() {
            return {
                playlist: [],
                loading: false  // 加载
            }
        },
        components: {
            musicList
        },
        created() {
            this.$nextTick(() => {
                topList(1).then(res => {
                    if (res.status === 200) {
                        this.playlist = formatTopSongs(res.data.playlist.tracks.slice(0, 100));
                        this.$store.commit('getPlayList', this.playlist);
                    }
                });
            })
        },
    }
</script>

<style lang="stylus" scoped>
    .playlist
        width 100%
        height calc(100% - 60px)
</style>
