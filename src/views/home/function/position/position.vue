<template>
    <div class="position">
        <header class="header">
            <router-link to="/home/mine"><</router-link>
            <router-link to="/login">收货地址</router-link>
            <router-link to="/home/shouye"><i class="icon iconfont icon-shouye"></i></router-link>
        </header>
        <section class="section">
            <div class="addr"><my-write></my-write></div>
            <p class="addes" @click="address"><em>+</em>新增加地址</p>
        </section>
        <router-view></router-view>
    </div>
</template>

<script>
import myWrite from '../../../../components/write/write.vue';
export default {
    name: 'myPosition',
    methods: {
        address () {
            this.$router.push('/home/mine/form')
        }
    },
    components: {
        myWrite
    }
}
</script>

<style scoped lang="scss">
    .position{
        width: 100%;
        height: 100%;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 .15rem;
            box-sizing: border-box;
            a{
                font-size:.38rem;
            }
        }
        .section{
            background: #eee;
            flex:1;
            display: flex;
            flex-direction: column;
            .addr{
                flex: 1;
                overflow-y:scroll;
            }
             .addes{
                 font-family: PingFangSC-Regular, sans-serif;
                background: #fc4141;
                width: 4.66rem;
                height: 0.98rem;
                text-align: center;
                line-height: 1.01rem;
                border-radius: 0.48rem;
                margin-left: 1.42rem;
                color: #fff;
                font-size: 0.32rem;
                em{
                    font-style: normal;
                    margin-right: 0.2rem;
                }
             }   
        }
    }
</style>
