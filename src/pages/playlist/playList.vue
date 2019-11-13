<template>
    <div class="playlist">
        <music-list></music-list>
    </div>
</template>

<script>
    import axios from 'axios'
    import musicList from '../../components/music-list/music-list'
    export default {
        name: "playList",
        components: {
            musicList
        },
        mounted() {
            axios.get('/api/top/list?idx=1').then(res => {
                console.log(res);
            })
        }
    }
</script>

<style scoped>

</style>
