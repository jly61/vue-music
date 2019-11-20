<template>
    <div class="progress-bar" @click="barClick($event)">
        <div class="point" ref="point"></div>
        <!--        播放总长度-->
        <div class="outer" ref="outer"></div>
        <!--        已经播放-->
        <div class="inner" ref="inner">{{innerWidth}}</div>
    </div>
</template>

<script>
    export default {
        name: "progress-bar",
        props: {
            percent: {
                type: Number
            }
        },
        data() {
            return {

            }
        },
        mounted() {
            this.$nextTick(() => {

                // console.log(`outer:${this.$refs.outer.clientWidth}`);
                // console.log(`inner:${this.$refs.inner.clientWidth}`)
            })
        },
        computed: {
            innerWidth() {
                if(this.percent > 0) {
                    let width = this.$refs.outer.clientWidth * this.percent;
                    this.$refs.inner.style.width = `${width}px`;
                    this.$refs.point.style.left = `${width}px`
                } else {
                    return
                }
            }
        },
        methods: {
            barClick(e) {
                let clientX = e.clientX;
                let rect = e.target.getBoundingClientRect().x;
                let width = clientX - rect;
                this.$refs.inner.style.width = `${width}px`;
                this.$refs.point.style.left = `${width}px`
            }
        }

    }
</script>

<style lang="stylus" scoped>
    @import "~style/mixin.styl"
    @import "~style/var.styl"
    .progress-bar
        position relative
        width 100%
        height 14px
        &:hover
            cursor pointer
        .point
            position absolute
            top 2px
            width 10px
            height 10px
            background-color $highLight
            border-radius 50%
        .outer
            position absolute
            top 6px
            width 100%
            height 2px
            background $fontColor
        .inner
            position absolute
            top 6px
            width 30%
            height 2px
            background #fff

</style>
