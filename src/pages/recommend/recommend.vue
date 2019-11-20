<template>
    <div class="topList">
        <div class="topList-head">云音乐特色榜</div>
        <div class="topList-content">
            <div class="list-item" v-for="(item, index) in topList" :key="index">
                <router-link tag="div" :to="{path:`/detail/${item.id}`}" class="topList-item">
                    <div class="topList-img">
                        <img :src="item.coverImgUrl" :alt="item.name">
                    </div>
                    <h3 class="topList-name">{{item.name}}</h3>
                </router-link>
            </div>
        </div>
        <div class="topList-head">热门歌单</div>
        <div class="topList-content">
            <div class="list-item" v-for="(item, index) in hotList" :key="index">
                <router-link tag="div" :to="{path:`/detail/${item.id}`}" class="topList-item">
                    <div class="topList-img">
                        <img :src="item.picUrl" :alt="item.name">
                    </div>
                    <h3 class="topList-name">{{item.name}}</h3>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {getAllTopList, getPersonalized} from "@/api";

    export default {
        name: "recommend",
        data() {
            return {
                topList: [],
                hotList: [],
            }
        },
        created() {
            getAllTopList().then(res => {
                if(res.data.code === 200) {
                    this.topList = res.data.list.filter(item => {
                        if(item.ToplistType) {
                            return item
                        }
                    })
                }
            });
            getPersonalized().then(res => {
                if(res.data.code === 200) {
                    this.hotList = res.data.result
                }
            })
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/var.styl";
    @import "~style/mixin.styl"
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

    .topList
        width 100%
        height 100%
        overflow-x hidden
        overflow-y auto
        &-head
            width 100%
            height 34px
            line-height 34px
            padding 20px 0
            font-size 18px
            color $highLight
        &-content
            display flex
            flex-wrap wrap
            .list-item
                width calc(100/7)
                .topList-item
                    width 130px
                    margin 0 20px 20px
                    cursor pointer
                    &:hover
                        color $highLight
                        no-wrap()
                    img
                        width 130px
                        height 130px
                    .topList-name
                        height 30px
                        line-height 30px
                        text-align center
                        no-wrap()
</style>
