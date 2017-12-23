<template>
    <div class="home_page">
        <header class="header">
            <a href="#">
                <i class="icon iconfont icon-zixun"></i>
                <span>服务站</span>
            </a>
            <my-header></my-header>
            <a href="#">
                <i class="icon iconfont icon-fenxiang1"></i>
                <span>我的店铺</span>
            </a>
        </header>
        <div class="scroll" @scroll="scrollFn" ref="main">
            <div class="big_box" ref="scrollMain">
                <my-shouyelist></my-shouyelist>
                <div class="upload">
                    <my-upload v-for="(v, k) in imgData" :key="k" :imgdata="v"></my-upload>
                </div>
                <p>{{tip}}</p>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import myHeader from '../../../components/header/header.vue';
import myUpload from '../../../components/upload/upload.vue';
import myShouyelist from '../../../components/shouye_list/shouye_list.vue';
export default {
    name: 'myHomePage',
    data () {
        return {
            imgData: [],
            channelId: 2,
            canIQuery: true,
            tip: '正在加载中'
        };
    },
    components: {
        myHeader,
        myUpload,
        myShouyelist
    },
    created () {
        this.queryGoodsList();
    },
    methods: {
        queryGoodsList: function(){
            this.$http.post('/mall/index/getGoodsChannel', {
                channel_id: this.channelId
            }).then((res) => {
                let data = JSON.parse(JSON.stringify(res.data));
                this.imgData = this.imgData.concat(res.data.data.data)
                if(res.data.data.data.length === 0){
                    this.tip = '加载完毕'
                }
                this.canIQuery = true
            })
        },
        scrollFn() {
            let scroller = this.$refs.scrollMain.offsetHeight;
            let main = this.$refs.main;
            let mainHeight = main.offsetHeight;
            let scrollTop = main.scrollTop;
            if(this.canIQuery){
                if(scroller - mainHeight - scrollTop < 50){
                    console.log('已接近');
                    this.canIQuery = false
                    this.channelId++;
                    this.queryGoodsList();
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .home_page{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header{
            .header_div{
                margin-left:20%;
            }
            width: 100%;
            height: 1rem;
            background: #fff;
            border-bottom:1px solid #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a{
                width: 20%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                color:#f00;
                .icon{
                    font-size:.32rem;
                }
                &:nth-child(2){
                    width: 60%;
                }
            }
        }
        .scroll{
            flex:1;
            overflow-y:scroll;
            box-sizing: border-box;
        }
    }
    .upload{
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    } 
</style>
