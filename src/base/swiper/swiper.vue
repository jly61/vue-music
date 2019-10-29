<template>
    <div>
        <Swiper :showIndicator='true' class="swiper" v-if="showSwiper">
            <Slide class="swiper-slide" v-for="item in swiperList" :key="item.id">
                <a :href="item.linkUrl">
                    <img class="swiper-img" :src="item.picUrl" alt="">
                </a>
            </Slide>
        </Swiper>
    </div>
</template>

<script>
    export default {
        name: "swiper",
        props: {
            swiperList: {
                Array
            }
        },
        computed: {
            showSwiper() {
                return this.swiperList.length
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .swiper >>> .wh_indicator_item
        background rgba(0,0,0,0.5)
    .swiper >>> .wh_show_bgcolor
        background #fff!important
    .swiper
        background #eee
        .swiper-img
            width 100%
</style>