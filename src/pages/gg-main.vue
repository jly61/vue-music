<template>
    <div class="main">
        <div class="left">
            <gg-tab></gg-tab>
            <play-list></play-list>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
    import ggTab from '../components/gg-tab/gg-tab'
    import playList from '@/pages/playlist/playList'
    export default {
        name: "gg-main",
        components: {
            ggTab,
            playList
        }
    }
</script>

<style lang="stylus" scoped>
    .main
        box-sizing border-box
        display flex
        width 100%
        height calc(100vh - 60px)
        padding 25px
        .left
            width 75%
            box-sizing border-box
            border-right 2px solid rgba(0, 0, 0, .6)
        .right
            width 25%
</style>
