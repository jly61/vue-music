<template>
    <div class="recommend">
        <swiper :swiperList="swiperList"></swiper>
    </div>
</template>

<script>
    import axios from 'axios'
    import Swiper from '@/base/swiper/swiper'
    export default {
        name: "recommend",
        data() {
            return {
                swiperList: []
            }
        },
        components: {
            Swiper
        },
        mounted() {
            this.$nextTick(() => {
                this.getRecommend()
            })
        },
        methods: {
            getRecommend() {
                axios.get('/api/recommend').then((res) => {
                    if(res.data.code === 0) {
                        const data = res.data.data;
                        this.swiperList = data.slider;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>