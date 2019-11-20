<template>
    <div class="music-bar">
        <div class="btns">
            <i class="iconfont iconprev" @click="prevOrNext('prev')"></i>
            <div class="iconfont play" :class="[$store.state.playing ? 'iconplay' : 'iconpause']"
            @click="playMusic"
            ></div>
            <i class="iconfont iconnext" @click="prevOrNext('next')"></i>
        </div>
        <div class="main">
            <div class="progress-title">
                <div class="music-info">{{musicInfo.title}}</div>
                <div class="time">{{musicInfo.time | format}}</div>
            </div>
            <progress-bar :percent="musicPercent"></progress-bar>
        </div>
        <i class="iconfont iconloop"></i>
        <i class="iconfont iconcomment"></i>
        <div class="volume">
            <i class="iconfont iconvolume"></i>
            <progress-bar :percent="musicPercent"></progress-bar>
        </div>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${$store.state.currentMusicInfo.id}`" autoplay></audio>
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
                currentTime: 0,
                duration: -1,
            }
        },
        filters: {
            format
        },
        computed: {
            //格式化播放器数据
            musicInfo() {
                if(Object.keys(this.$store.state.currentMusicInfo).length > 0) {
                    return {
                        title: `${this.$store.state.currentMusicInfo.name} - ${this.$store.state.currentMusicInfo.singer}`,
                        time: Math.floor(this.$store.state.currentMusicInfo.duration)
                    }
                } else {
                    return {
                        title: 'ggPlayer音乐播放器',
                        time: '',
                    }
                }
            },
            musicPercent() {
                if (Object.keys(this.$store.state.currentMusicInfo).length > 0) {
                    return this.currentTime / this.duration;
                } else {
                    return 0
                }

            }
        },
        mounted() {
            this.$nextTick(() => {
                //设置初始音量
                this.$refs.audio.volume = this.$store.state.volume;
                this.$refs.audio.addEventListener('timeupdate', this._currentTime);
                this.$refs.audio.addEventListener('canplay', this._durationTime);
            })
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
                    this.$refs.audio.pause();
                    this.$store.commit('changePlay');
                } else {
                    this.$refs.audio.play();
                    this.$store.commit('changePlay');
                }
            },
            // 上一曲或下一曲
            prevOrNext(flag) {
                this.$store.commit('prevMusic',flag);
            },
            _currentTime: function () {
                console.log(this.$refs.audio.currentTime, this.$refs.audio.duration)
                this.currentTime = this.$refs.audio.currentTime
                // console.log(`当前播放时间:${this.currentTime},类型:${typeof this.currentTime}`)
            },
            _durationTime: function () {
                this.duration = this.$refs.audio.duration
                // console.log(`总时长:${this.duration},类型:${typeof this.duration}`)
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
