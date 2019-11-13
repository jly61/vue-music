<template>
    <header class="gg-header">
        <router-link to="/" tag="h1" class="header-title">ggPlayer 在线音乐播放器</router-link>
    </header>
</template>

<script>
    export default {
        name: "gg-header"
    }
</script>

<style lang="stylus" scoped>
    .gg-header
        height 60px
        width 100%
        /*background forestgreen*/
        .header-title
            line-height 60px
            text-align center
            font-size 18px
            color #fff

</style>
