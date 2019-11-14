<template>
    <div class="playlist">
        <music-list></music-list>
    </div>
</template>

<script>
    import musicList from '../../components/music-list/music-list'
    export default {
        name: "playList",
        components: {
            musicList
        }
    }
</script>

<style lang="stylus" scoped>
    .playlist
        width 100%
        height calc(100% - 60px)
</style>
