<template>
    <dl @click="message(imgdata)">
        <dt>
            <img v-lazy="'http://www.lb717.com/' + imgdata.obj_data" alt="">
        </dt>
        <dd>
            <h2>{{imgdata.goods_name}}</h2>
            <h4><span>￥{{imgdata.discount_price}}</span><img src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png" alt="" @click.stop="addList"></h4>
        </dd>
    </dl>
</template>

<script>
import {getCookie} from '../../until/until.js';
export default {
    name: 'myUpload',
    data () {
        return {
            para: {}
        }
    },
    props: ['imgdata'],
    methods: {
        message (imgdata) {
            this.para = {
                store_name: imgdata.store_name,
                store_logo: imgdata.store_name,
                goods_bane: imgdata.goods_name,
                obj_data: imgdata.obj_data,
                price:imgdata.discount_price
            }
            this.$router.push({path: '/home/shouye/details', query: {obj: JSON.stringify(this.para)}})
        },
        addList (imgdata) {
            let token = getCookie('token');
            if(!token){
                this.$router.push({name: 'login', query: {from: 'home'}});
                return;
            }
            this.$http_token.post('/mall/index/getGoodsChannel',{id:imgdata.goods_id}).then(res => {
                this.$message('添加成功');
                this.$store.commit('update_cart', {
                    id: this.imgdata.goods_id,
                    goods_name: this.imgdata.goods_name,
                    price: this.imgdata.discount_price,
                    url: 'http://www.lb717.com/' + this.imgdata.obj_data,
                    count: 1,
                    checkbox: false
                })
            })
            
        }
    }
}
</script>

<style scoped lang="scss">
        dl{
            width: 49%;
            background: #fff;
            margin-top: 0.15rem;
            img{
                width: 100%;
                height: auto;
            }
        }
        dd{
            padding:.1rem .14rem;
            box-sizing: border-box;
            h2{
                font-size:.32rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
                font-weight: 400;
                font-size:.26rem;
                height: 0.75rem;
            }
            h4{
                font-size:.3rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 0.32rem;
                line-height: 0.6rem;
                span{
                    color:#f00;
                }
                img{
                    width: 0.4rem;
                    height: 0.4rem;
                }
            }
        }
</style>
