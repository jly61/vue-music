<template>
    <div class="search">
        <div class="search-header">
            <span v-for="item in hotSearchList" @click="clickHot(item.first)">{{item.first}}</span>
            <input type="text" placeholder="音乐/歌手/mv" class="search-input" @keyup.enter="onEnter"
                   v-model.trim="searchValue"
                   autofocus>
        </div>
        <music-list :list="searchResult" :listType="2" @triggerSearch="loadNextPage"></music-list>
    </div>
</template>

<script>
    import MusicList from 'components/music-list/music-list'
    import {hotSearch, search} from '@/api'
    import {formatSongs} from "@/utils/song";

    export default {
        name: "search",
        components: {
            MusicList
        },
        data() {
            return {
                hotSearchList: [], // 热搜列表
                searchValue: '', // 搜索关键词
                searchResult: [], // 搜索结果
                page: 0, // 分页
            }
        },
        created() {
            // 获取热门搜索列表
            hotSearch().then(res => {
                if(res.data.code === 200) {
                    this.hotSearchList = res.data.result.hots.slice(0, 5)
                }
            })
        },
        methods: {
            // 点击热门搜索
            clickHot(value) {
                this.searchValue = value;
                this.onEnter();
            },
            onEnter() {
                if(this.searchValue === '') {
                    alert('搜索内容不能为空')
                    return
                }
                search(this.searchValue).then(res => {
                    this.searchResult = formatSongs(res.data.result.songs);
                    this.$store.commit('getPlayList', this.searchResult);
                })
            },
            // 滚动加载下一页
            loadNextPage() {
                this.page += 1;
                // 计算页数
                if (this.page > Math.ceil(this.songCount) / 30 - 1) {
                    return
                }
                search(this.searchValue, this.page).then(res => {
                    this.songCount = res.data.result.songCount;
                    this.searchResult = [...this.searchResult, ...formatSongs(res.data.result.songs)];
                    this.$store.commit('changeLoading');
                })
            }
        }

    }
</script>

<style lang="stylus" scoped>
    @import "~style/var.styl"
    .search
        width 100%
        height calc(100% - 60px)
        .search-header
            display flex
            height 40px
            padding 10px 15px
            color $fontColor
            background rgba(0, 0, 0, 0.2)
            span
                line-height 40px
                margin-right 15px
                &:hover
                    color $highLight
                    cursor pointer
            .search-input
                flex 1
                box-sizing border-box
                height 40px
                padding 0 15px
                outline none
                color $highLight
                border 1px solid $fontColor
                background-color transparent
                &::placeholder
                    color $fontColor

        .musicList
            height calc(100% - 60px)
            color $fontColor
    </style>
