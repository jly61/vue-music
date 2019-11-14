<template>
    <nav class="gg-tab">
        <router-link tag="span" to="/playlist" class="active">正在播放</router-link>
        <router-link tag="span" to="/recommend">推荐</router-link>
        <router-link tag="span" to="">搜索</router-link>
        <router-link tag="span" to="">我的歌单</router-link>
        <router-link tag="span" to="">我听过的</router-link>
    </nav>
</template>

<script>
    export default {
        name: "gg-tab"
    }
</script>

<style lang="stylus" scoped>
    .gg-tab
        height 60px
        width 100%
        span
            display inline-block
            height 40px
            line-height 40px
            padding 0 20px
            margin-right 10px
            border 1px solid hsla(0, 0, 100%, .6)
            color rgba(255, 255, 255, .6)
            text-align center
            font-size 14px
            &:hover
                border 1px solid #fff
                color #fff
                cursor pointer
        .active
            border 1px solid #fff
            color #fff
</style>
