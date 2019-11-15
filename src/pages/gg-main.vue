<template>
    <div class="main">
        <div class="left">
            <gg-tab></gg-tab>
            <router-view></router-view>
        </div>
        <div class="right">

        </div>

    </div>
</template>

<script>
    import ggTab from '../components/gg-tab/gg-tab'
    // import playList from '@/pages/playlist/playList'
    export default {
        name: "gg-main",
        components: {
            ggTab,
            // playList
        }
    }
</script>

<style lang="stylus" scoped>
    .main
        position relative
        box-sizing border-box
        display flex
        width 100%
        height calc(100vh - 60px - 80px - 25px)
        padding 25px 25px 0 25px
        .left
            height calc(100% - 60px)
            width 78%
            box-sizing border-box
        .right
            width 22%
</style>
