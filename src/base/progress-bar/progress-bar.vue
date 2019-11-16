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
    @import "~style/mixin.styl"
    @import "~style/var.styl"
    .progress-bar
        position relative
        width 100%
        height 14px
        .point
            position absolute
            top 2px
            width 10px
            height 10px
            background-color $highLight
            border-radius 50%
        .outer
            position absolute
            top 6px
            width 100%
            height 2px
            background $fontColor
        .inner
            position absolute
            top 6px
            width 30%
            height 2px
            background #fff

</style>
