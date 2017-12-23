<template>
    <div class="details">
        <header class="header">
            <router-link to="/home/shouye">< 返回</router-link>
            <a href="#">商品 详情</a>
            <router-link to="/home/shouye"><i class="icon iconfont icon-shouye"></i></router-link>
        </header>
        <section class="scetion">
            <dl>
                <dt>
                    <img :src="'http://www.lb717.com/' + objs.obj_data" alt="">
                </dt>
                <dd>
                    <h4>{{objs.goods_bane}}</h4>
                    <h5>{{objs.price}}  {{objs.store_logo}}</h5>
                </dd>
            </dl>
        </section>
        <footer class="footer">
            <button>加入购物车</button><button>立即购买</button>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'myDetails',
    data () {
        return {
            objs: ''
        }
    },
    mounted () {
        this.objs = JSON.parse(this.$route.query.obj);
        console.log(typeof(this.objs));
    }
}
</script>

<style scoped lang="scss">
    .details{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: 998;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: 1rem;
            border-bottom:1px solid #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:0 .2rem;
            box-sizing: border-box;
            a{
                font-size:.34rem;
                &:nth-child(3){
                    font-size:.4rem;
                }
            }
        }
        .scetion{
            flex:1;
            dl{
                width: 100%;
                height: auto;
                dt{
                    width: 100%;
                    height: auto;
                    img{
                        width: 100%;
                        height: auto;
                    }
                }
            }
            dd{
                padding:0 .25rem;
                box-sizing: border-box;
                h5{
                    margin-top: .12rem;
                }
            }
        }
        .footer{
            width:100% ;
            height: 1rem;
            border-top:1px solid #ccc;
            display: flex;
            button{
                width: 50%;
                height: 100%;
                border:0;
                outline: 0;
                font-size:.34rem;
                color:#fff;
                &:nth-child(1){
                    background: #f00;
                }
                &:nth-child(2){
                    background: darkorange;
                }
            }
        }
    }
</style>
