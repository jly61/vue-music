<template>
    <div class="detail">
        <music-list :list="list"></music-list>
    </div>
</template>

<script>
    import MusicList from 'components/music-list/music-list'
    import {getPlaylistDetail} from "@/api";
    import {formatTopSongs} from "@/utils/song";

    export default {
        name: "detail",
        components: {
            MusicList
        },
        data() {
            return {
                list: []
            }
        },
        created() {
            console.log(1);
            getPlaylistDetail(this.$route.params.id).then(res => {
                if(res.data.code === 200) {
                    this.list = formatTopSongs(res.data.playlist.tracks.slice(0 ,100))
                }
            })
        }
    }
</script>

<style lang="stylus" scoped>
    .detail
        width 100%
        height calc(100% - 60px)
</style>
