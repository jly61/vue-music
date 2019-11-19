<template>
    <!--    歌曲列表-->
    <div class="musicList" v-if="list.length > 0" ref="musicList">
        <div class="list-head list-item">
            <span class="list-name">歌曲</span>
            <span class="list-artist">歌手</span>
            <span v-if="listType === 1" class="list-time">时长</span>
            <span v-else class="list-album">专辑</span>
        </div>
        <div class="list-content" ref="listContent" @scroll="listScroll">
            <div class="list-item" v-for="(item, index) in list" :key="item.id">
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
                <span class="list-artist">{{item.singer}}</span>
                <span v-if="listType === 1" class="list-time">
                    {{Math.floor(item.duration) | format}}
                    <!--                    <i class="iconfont iconclose"></i>-->
                </span>
                <span v-else="listType === 2" class="list-album">
                    {{item.album}}
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
                lastTime: 0
            }
        },
        filters: {
            format
        },
        props: {
            // 从父组件接收的列表
            list: {
                type: Array
            },
            // 从父组件接收的列表类型
            listType: {
                type: Number
            }
        },
        methods: {
            // 获取当前歌曲信息
            getMusicInfo(item, index) {
                this.$store.commit('getCurrentMusicInfo', item);
                this.$store.commit('getCurrentMusicIndex', index);
                if (this.currentMusicId === item.id) {
                    this.$store.commit('changePlay');
                    // console.log(`11:${this.$store.state.playing}`)
                } else {
                    this.currentMusicId = item.id;
                    this.$store.commit('changePlay', true);
                    // console.log(`22:${this.$store.state.playing}`)
                }
                this.bus.$emit('playMusic');
            },
            listScroll(e) {
                const scrollTop = e.target.scrollTop;
                const {scrollHeight, offsetHeight} = e.target;
                if (this.listType !== 2) {
                    return
                }
                if (scrollTop + offsetHeight > scrollHeight - 50) {
                    this.nowTime = new Date().getTime();
                    if (this.nowTime - this.lastTime > 1000) {
                        console.log(this.nowTime, this.lastTime)
                        this.$emit('triggerSearch');
                        this.lastTime = this.nowTime;
                    } else {
                        this.lastTime = 0
                    }
                }
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
            overflow-y scroll
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

    .list-album
        display block
        width 300px

    .icon-delete
        font-size 32px

        &:hover
            color #fff
            cursor pointer
</style>
