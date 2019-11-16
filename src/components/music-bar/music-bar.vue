<template>
    <div class="music-bar">
        <div class="btns">
            <i class="iconfont iconprev"></i>
            <div class="iconfont play" :class="[$store.state.playing ? 'iconplay' : 'iconpause']"
            @click="playMusic"
            ></div>
            <i class="iconfont iconnext"></i>
        </div>
        <div class="main">
            <div class="progress-title">
                <div class="music-info">{{$store.state.musicName}}</div>
                <div class="time">{{$store.state.duration | format}}</div>
            </div>
            <progress-bar></progress-bar>
        </div>
        <i class="iconfont iconloop"></i>
        <i class="iconfont iconcomment"></i>
        <div class="volume">
            <i class="iconfont iconvolume"></i>
            <progress-bar></progress-bar>
        </div>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${$store.state.currentMusicInfo.id}`" controls autoplay></audio>
    </div>
</template>

<script>
    import progressBar from '@/base/progress-bar/progress-bar'
    import {format} from "@/utils/util";

    export default {
        name: "music-bar",
        components: {
            progressBar
        },
        data() {
            return {

            }
        },
        filters: {
            format
        },
        updated() {
            this.$nextTick(() => {
                this.bus.$on('playMusic', () => {
                    if(this.$store.state.playing) {
                        this.$refs.audio.play()
                    } else {
                        this.$refs.audio.pause();
                    }
                })
            })
        },
        methods: {
            playMusic() {
                if(this.$store.state.playing) {
                    this.$refs.audio.pause()
                    this.$store.commit('changePlay');
                } else {
                    this.$refs.audio.play();
                    this.$store.commit('changePlay');
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/iconfont.css"
    @import "~style/mixin.styl"
    .music-bar
        display flex
        box-sizing border-box
        height 80px
        line-height 80px
        width 100%
        padding 0 25px
        color #fff
        .iconfont
            font-size 40px
            &:hover
                cursor pointer
        .btns
            display: flex
            width 180px
            justify-content space-between
        .main
            position relative
            flex 1
            box-sizing border-box
            margin-top 25px
            padding-left 40px
            font-size 12px
            height 30px
            width 100%
            .progress-title
                display flex
                justify-content space-between
                height 16px
                line-height 16px
                padding-right 10px
        .iconloop,.iconcomment,.iconvolume
            margin-left 20px
            font-size 24px
        .volume
            display flex
            align-items center
            width 150px
            .progress-bar
                flex 1

</style>
