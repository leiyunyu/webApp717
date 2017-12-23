<template>
    <div class="header_div">
        <header class="hd">
            <router-link to="/home/search">
                <input type="text" placeholder="请输入要购买的商品">
                <i class="icon iconfont icon-fangdajing"></i>
            </router-link>
        </header>
    </div>
</template>

<script>
export default {
    name: 'myHeader'
}
</script>

<style scoped lang="scss">
    .header_div{
        position: fixed;
        top: 0;
        left: 0;
        .hd{
            width:100%;
            height: 100%;
            a{
                input{
                    margin-top: .2rem;
                    width: 80%;
                    height: .6rem;
                    margin-left: 5%;
                    background: #eee;
                    outline: 0;
                    border:0;
                    border-radius: .1rem;
                    padding-left:.5rem;
                    font-size:.3rem;
                }
                position: relative;
                .icon{
                    position: absolute;
                    left: .4rem;
                    top: 0rem;
                    font-size:.3rem;
                }
            }
        }
    }
        
</style>
