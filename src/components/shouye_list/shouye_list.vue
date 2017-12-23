<template>
    <div class="shouye_list">
        <div class="banner">
                    <mt-swipe :auto="2000">
                        <mt-swipe-item v-for="(v, k) in bannerData" :key="k">
                            <img :src="v.src" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
                <div class="list">
                    <li v-for="(v, k) in listData" :key="k">
                        <i :class="v.class"></i>
                        <span>{{v.span}}</span>
                    </li>
                </div>
                <div class="icons-cont">
                    <span class="left">商城动态</span>
                    <div class="right">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <p>7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品.</p>
                                </div>
                                <div class="swiper-slide">
                                    717商城社区服务功能正式上线！抢红包！晒家乡！好吃、好玩.
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="dayday">
                    <span><img src="http://www.lb717.com/static/mobile/images/homeImg/todayimg.png" alt="">天天特惠<em>每天都有惊喜</em></span>
                    <span>更多<i class="icon iconfont icon-chevron-thin-right"></i></span>
                </div>
                <div class="imgShow">
                    <dl>
                        <dt>
                            <img src="../../assets/img/img2.png" alt="">
                        </dt>
                        <dd>
                            <img src="../../assets/img/img1.png" alt="">
                            <img src="../../assets/img/img3.png" alt="">
                        </dd>
                    </dl>
                </div>
                <div class="local">
                    <span></span>
                    <span><img src="http://www.lb717.com/static/mobile/images/homeImg/homelandlogo.png" alt="">家乡味道</span>
                    <span>更多<i class="icon iconfont icon-chevron-thin-right"></i></span>
                </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
import bannerData from '../../Mock/data/banner.js';
import listData from '../../Mock/data/list.js';
Vue.component('mint-swipe', Swipe);
Vue.component('mint-swipe-items-wrap', SwipeItem);
import Swiper from '../../assets/js/swiper.min.js';
setTimeout(() => {
    var mySwiper = new Swiper('.swiper-container',{
        direction: 'vertical',
        autoplay: {
            delay:1500
        },
        loop: true
    })
}, 1000);
export default {
    name: 'myShouyelist',
    data () {
        return {
            bannerData: bannerData,
            listData: listData
        };
    }
}
</script>

<style scoped lang="scss">
        .banner{
        width: 100%;
        height: 3.5rem;
    }
    .banner img{
        width: 100%;
        height: auto;
    }
    .list{
        margin-top: .2rem;
        background: #fff;
        width: 100%;
        height: 3.4rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        li{
            width: 25%;
            justify-content: center;
            align-items: center;
            height: 1.7rem;
            display: flex;
            flex-direction: column;
            .icon{
                width: 0.8rem;
                height: 0.8rem;
                background: #eee;
                border-radius: 50%;
                font-size:.45rem;
                text-align: center;
                line-height: 0.8rem;
            }
            span{
                margin-top: 0.1rem;
            }
        }
    }
    .icons-cont {
        height: 1rem;
        padding-left: .3rem;
        padding-right: 0.3rem;
        padding-bottom:.1rem;
        display: flex;
        background: #fff;
    }
    .icons-cont .left{
        width: 0.75rem;
        height: .6rem;;
        line-height: .3rem;
        font-size: 0.3rem;
        color: #ff7924;
        margin-top: .1rem;
    }
    .icons-cont .right{
        flex: 1;
        padding: .1rem;
        border: solid 1px #ccc;
        border-radius: 5px;
        height: .8rem;
    }
    .icons-cont .right .swiper-container{
        width: 100%;
        height: .6rem;
    }
    .icons-cont .right .swiper-wrapper{
        width: 100%;
        height: 100%;
    }
    .icons-cont .right .swiper-slide{
        width: 100%;
        height: 100%;
        line-height: .31rem;
        p{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
        }
    }
    .dayday{
        width: 100%;
        height: 1rem;
        background: #fff;
        margin:.15rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 .2rem;
        box-sizing: border-box;
        span{
            &:nth-child(1){   
                color:#ff7924;
            }
            img{
                width: 0.5rem;
                height: 0.5rem;
                vertical-align: middle;
                padding-right:.15rem;
            }
            em{
                font-size:.26rem;
                font-style: normal;
                padding-left:.15rem;
            }
        }
    }
    .imgShow{
        width: 100%;
        height: 4.12rem;
        dl{
            display: flex;
            justify-content: space-between;
            dt{
                width: 49%;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            dd{
                width: 49%;
                img{
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
    .local{
        width: 100%;
        height: 1rem;
        background: #fff;
        margin-top:.15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 .2rem;
        box-sizing: border-box;
        span{
            &:nth-child(1){   
                width: 1rem;
            }
            &:nth-child(2){   
                color:#ff7924;
            }
            img{
                width: 0.5rem;
                height: 0.5rem;
                vertical-align: middle;
                padding-right:.15rem;
            }
            em{
                font-size:.26rem;
                font-style: normal;
                padding-left:.15rem;
            }
        }
    }
</style>
