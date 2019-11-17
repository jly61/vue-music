<template>
    <!--    歌曲列表-->
    <div class="musicList">
        <div class="list-head list-item">
            <span class="list-name">歌曲</span>
            <span class="list-artist">歌手</span>
            <span class="list-time">时长</span>
        </div>
        <div class="list-content" ref="listContent">
            <div class="list-item" v-for="(item, index) in $store.state.playList" :key="item.id">
                <span class="list-num" v-text="index + 1"></span>
                <div class="list-name">
                    <span>{{item.name}}</span>
                    <div class="list-menu">
                        <i class="iconfont icon-play"
                           :class="[$store.state.playing && currentMusicId === item.id ? 'iconplay' : 'iconpause']"
                           @click="getMusicInfo(item, index)"
                        ></i>
                    </div>
                </div>
                <span class="list-artist">{{item.ar[0].name}}</span>
                <span class="list-time">
                    {{Math.floor(item.dt / 1000) | format}}
                    <!--                    <i class="iconfont iconclose"></i>-->
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import {topList} from "@/api";
    import {format} from "@/utils/util";

    export default {
        name: "music-list",
        data() {
            return {
                currentMusicId: 0,
            }
        },
        filters: {
            format
        },
        created() {
            this.$nextTick(() => {
                topList(1).then(res => {
                    if (res.status === 200) {
                        this.$store.commit('getPlayList', res.data.playlist.tracks.slice(0, 100));
                        console.log(this.$store.state.playList)

                    }
                })
            })
        },
        methods: {
            getMusicInfo(item, index) {
                this.$store.commit('getCurrentMusicInfo', item);
                this.$store.commit('getCurrentMusicIndex', index);
                if(this.currentMusicId === item.id) {
                    this.$store.commit('changePlay');
                    // console.log(`11:${this.$store.state.playing}`)
                } else {
                    this.currentMusicId = item.id;
                    this.$store.commit('changePlay', true);
                    // console.log(`22:${this.$store.state.playing}`)
                }
                this.bus.$emit('playMusic');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/mixin.styl"
    @import "~style/var.styl"
    //滚动条美化
    /*滚动条的宽度*/
    ::-webkit-scrollbar
        width 6px

    /*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/
    ::-webkit-scrollbar-track
        width 6px
        background-color rgba(0, 0, 0, 0.3)
        border-radius 10px

    /*滚动条的设置*/
    ::-webkit-scrollbar-thumb
        background-color $fontColor
        border-radius 10px

    .list-item
        width 100%
        display flex
        box-sizing border-box
        height 50px
        line-height 50px
        border-bottom 1px solid rgba(255, 255, 255, 0.2)


    .musicList
        height 100%
        color $fontColor

        .list-head
            color #fff

            .list-name
                padding-left 40px
                user-select none

        .list-content
            overflow-x hidden
            overflow-y auto
            height 100%

            .list-item:hover .list-menu {
                display block
            }

            .list-name
                position relative

                .list-menu
                    position absolute
                    display none
                    right 10px
                    top 0

                    &:hover
                        color $highLight
                        cursor pointer

                    .icon-play
                        font-size 40px

    .list-num
        display block
        width 30px
        margin-right 10px
        text-align center

    .list-name
        flex 1
        box-sizing border-box
        no-wrap()

    .list-artist
        display block
        width 300px
        no-wrap()

    .list-time
        display block
        width 60px

    .icon-delete
        font-size 32px

        &:hover
            color #fff
            cursor pointer
</style>
