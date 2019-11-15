<template>
    <div class="music-bar">
        <div class="btns">
            <i class="iconfont icon-prev">&#xe76e;</i>
            <div class="iconfont play">&#xe630;</div>
            <i class="iconfont icon-next">&#xe76d;</i>
        </div>
        <div class="main">
            <div class="progress-title">
                <div class="music-info">欢迎使用ggPlayer在线音乐播放器</div>
                <div class="time">03:11</div>
            </div>
            <progress-bar></progress-bar>
        </div>
        <i class="iconfont mode">&#xe61b;</i>
        <i class="iconfont comment">&#xe638;</i>
        <div class="volume">
            <i class="iconfont volume-icon">&#xe8c1;</i>
            <progress-bar></progress-bar>
        </div>
    </div>
</template>

<script>
    import progressBar from '@/base/progress-bar/progress-bar'
    export default {
        name: "music-bar",
        components: {
            progressBar
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
        .mode,.comment,.volume
            margin-left 20px
            font-size 24px
        .volume
            display flex
            align-items center
            width 150px
            .progress-bar
                flex 1
</style>
