<template>
    <footer class="footer">
        <router-link to="/home/shouye">
            <i class="icon iconfont icon-shouye"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/home/assortment">
            <i class="icon iconfont icon-fenlei"></i>
            <span>分类</span>
        </router-link>
        <router-link to="/home/shoppingcar">
            <i class="icon iconfont icon-gouwuche"></i>
            <span>购物车</span>
            <em>{{$store.state.cart_list.length}}</em>
        </router-link>
        <router-link to="/home/mine">
            <i class="icon iconfont icon-wode"></i>
            <span>我的</span>
        </router-link>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .footer{
        border-top:1px solid #ccc;
        width: 100%;
        height: 1rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a{
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            .icon{
                font-size:20px;
            }
            em{
                position: absolute;
                width: 0.3rem;
                height: 0.3rem;
                background: #f00;
                color:#fff;
                border-radius: 50%;
                display: inline-block;
                top: 0rem;
                right: .2rem;
                text-align: center;
                font-style: normal;
            }
        }
    }
    .footer a.router-link-active{
        color:#f00 !important;
    }
    .footer .a .icon.router-link-active{
        color:#f00 !important;
    }
</style>
