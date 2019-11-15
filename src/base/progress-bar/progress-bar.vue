<template>
    <div class="progress-bar">
        <div class="point"></div>
        <!--        播放总长度-->
        <div class="outer"></div>
        <!--        已经播放-->
        <div class="inner"></div>
    </div>
</template>

<script>
    export default {
        name: "progress-bar"
    }
</script>

<style lang="stylus" scoped>
    .progress-bar
        position relative
        width 100%
        height 14px
        .point
            position absolute
            top 2px
            width 10px
            height 10px
            background-color #fff
            border-radius 50%
        .outer
            position absolute
            top 6px
            width 100%
            height 2px
            background rgba(255, 255, 255, 0.6)
        .inner
            position absolute
            top 6px
            width 50%
            height 2px
            background #fff

</style>
