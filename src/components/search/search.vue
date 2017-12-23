<template>
    <div class="search">
        <header class="search_header">
            <input type="text" placeholder="请输入想要的商品" v-model.trim="searchInput"><router-link to="/home/shouye">取消</router-link><span @click="search_btn" >搜索</span>
        </header>
        <section class="section01">
            <h4>最近搜索<i class="icon iconfont icon-shanchu" @click="clear"></i></h4>
            <div class="up_box">
                <p v-if="this.searchHistoryList == null">暂无搜索记录...</p>
                <ul v-else>
                    <li class="search_item" v-for="(x, i) in searchHistoryList" :key="i">{{x}}</li>
                </ul>
            </div>
            <h4>大家都在搜</h4>
            <div class="down_box">
                <span>粽子</span>
                <span>锅巴</span>
                <span>酱</span>
                <span>小吃</span>
                <span>零食</span>
                <span>干果</span>
                <span>特产</span>
                <span>油</span>
                <span>大米</span>
                <span>面粉</span>
            </div>
        </section>
    </div>
</template>

<script>
import _ from 'lodash';
import myHeader from '../header/header.vue';
export default {
    name: 'mySearch',
    data () {
        return {
            searchInput: '',
            searchHistoryList: []
        }
    },
    components: {
        myHeader
    },
    created () {
        this.getHistory()
    },
    methods: {
        clear () {
            let ls = localStorage;
            ls.setItem('searchHistory',JSON.stringify([]));
            this.getHistory();
        },
        search_btn () {
            if(this.searchInput == '') return;
            let ls = localStorage;
            let shistory = ls.getItem('searchHistory');
            if(!shistory){
                ls.setItem('searchHistory', JSON.stringify([this.searchInput]))
            } else{
                let newHistory = JSON.parse(shistory)
                newHistory.unshift(this.searchInput);
                newHistory = _.uniq(newHistory);
                ls.setItem('searchHistory', JSON.stringify(newHistory));
                this.searchInput = '';
            }
            this.getHistory();
        },
        getHistory () {
            let ls = localStorage;
            this.searchHistoryList = JSON.parse(ls.getItem('searchHistory'));
        }
    }
}
</script>

<style scoped lang="scss">
    .search{
        width: 100%;
        height: 100%;
        background: #fff;
        border-bottom:1px solid #ccc;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .search_header{
            border-bottom:1px solid #ccc;
            width: 100%;
            height: 1rem;
            input{
                width: 60%;
                height: 0.6rem;
                margin-top: 0.2rem;
                border:1px slid #ccc;
                outline: 0;
                padding-left:.3rem;
                box-sizing: border-box;
                margin-left: 5%;
                border-radius: .2rem;
            }
            a{
                position: absolute;
                right: 1.6rem;
                top: .3rem;
            }
            span{
                position: absolute;
                right: .3rem;
                top: .3rem;
            }
        }
        .section01{
            flex:1;
            padding:0 .15rem;
            h4{
                line-height: .8rem;
                font-weight: 400;
                position: relative;
                .icon{
                    position: absolute;
                    top: 0;
                    right: 0.3rem;
                    font-size:.5rem;
                }
            }
            .up_box{
                width: 100%;
                height: 3rem;
                text-indent: 1em;
                ul li{
                    float: left;
                    border:1px solid #ccc;
                    text-align: center;
                    padding:.1rem .2rem;
                    border-radius: .07rem;
                    margin-left: 0.1rem;
                }
            }
            .down_box{
                display: flex;
                flex-wrap:wrap;
                span{
                    border:1px solid #ccc;
                    border-radius: .1rem;
                    padding:5px 15px;
                    margin-left:.25rem;
                    margin-top: 0.1rem;
                }
            }
        }
    }
</style>
