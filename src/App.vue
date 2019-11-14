<template>
    <div id="app">
        <gg-header></gg-header>
        <gg-main></gg-main>
        <div class="music-bar">
<!--            //隐藏的播放器-->
            <audio src="../public/test.mp3"></audio>
        </div>
    </div>
</template>

<script>
    import ggHeader from './components/gg-header/gg-header'
    import ggMain from './pages/gg-main'
    export default {
        name: 'app',
        components: {
            ggHeader,
            ggMain
        }
    }
</script>

<style>
    #app {
        font-family: Arial, 'Avenir', Helvetica, sans-serif;
        font-size: 14px;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    /*毛玻璃效果*/
    #app::before {
        content: '';
        background: url("http://cdn.mtnhao.com/music/bg-02.jpg") no-repeat;
        background-size: cover;
        background-position: 50%;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        opacity: .9;
        filter: blur(12px);
    }
    .music-bar {
        height: 80px;
        width: 100%;
        box-sizing: border-box;
        padding-bottom: 15px
        /*background #fff*/
    }

</style>
