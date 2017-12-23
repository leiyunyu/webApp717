<template>
    <div class="position">
        <header class="header">
            <router-link to="/home/mine/position"><</router-link>
            <router-link to="/login">收货人</router-link>
            <router-link to="/home/shouye"><i class="icon iconfont icon-shouye"></i></router-link>
        </header>
        <section class="section">
            <div class="form">
                <input type="text" placeholder="收货人姓名" class="name" v-model="username">
                <input type="text" placeholder="手机号" class="tele" v-model="telephone">
                <select name="" id="" v-model="province" class="province" @change="changeProvice(province)">
                    <option :value="v.name" v-for="(v, k) in provinces" :key="k">{{v.name}}</option>
                </select>
                <select name="" id="" v-model="city" class="city" @change="changeCity(city)">
                    <option :value="v.name" v-for="(v, k) in citylist" :key="k">{{v.name}}</option>
                </select>
                <select name="" id="" class="area" v-model="area">
                    <option :value="v" v-for="(v, k) in areaList" :key="k">{{v}}</option>
                </select>
                <input type="text" placeholder="详细地址" class="addr" v-model="address">
                <p class="moren"><span class="bgsa" :class="{'' : isA, 'bgss': !isA}" @click="isA = !isA">√</span><span>设为默认地址</span></p>
            </div>
                <p class="save" @click="ad_address">保存</p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'myForm',
    data () {
        return {
            isA: false,
            username: '',
            telephone: '',
            province: '',
            city: '',
            area: '',
            address: '',
            citylist: [],
            areaList: [],
            provinces:[],
            id: this.$store.state.address.length
        }
    },
    created () {
        this.$http.post('/home/address').then(res => {
            this.provinces = res.data
        })
        console.log(this.$store.state.address.length)
        this.username = this.$route.params.name
        this.telephone = this.$route.params.tele
        this.city = this.$route.params.city
        this.province = this.$route.params.pro
        this.area = this.$route.params.area
        this.address = this.$route.params.addIn
        this.id = this.$store.state.address.length
    },
    methods: {
        changeProvice (val) {
            this.provinces.forEach((v) => {
                if(v.name == val){
                    this.citylist = v.city;
                }
            })
        },
        changeCity (val) {
            this.citylist.forEach((v, k) => {
                if(v.name == val){
                    this.areaList = v.area;
                }
            })
        },
        ad_address () {
            if(!(/^1[34578]\d{9}$/.test(this.telephone))){
                alert('手机号输入不正确')
                this.telephone = '';
                return;
            }
            this.$store.commit('add_address', {
                username: this.username,
                telephone: this.telephone,
                province: this.province,
                city: this.city,
                area: this.area,
                addressInfo: this.address, 
                address: this.province + this.city + this.area + this.address,
                id: this.$store.state.address.length
            })
            this.$http.post('/add_addresss', {
                username: this.username,
                telephone: this.telephone,
                province: this.province,
                city: this.city,
                area: this.area,
                addressInfo: this.address, 
                address: this.province + this.city + this.area + this.address,
                id: this.$store.state.address.length
            }).then(res => {
                this.$router.push('/home/mine/position');
            }) 
        }
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
            .save{
                width: 4.60rem;
                height: 1rem;
                margin-top: .5rem;
                margin-left: 1.4rem;
                background: #fc4141;
                text-align: center;
                line-height: 1rem;
                color: #fff;
                border-radius: .5rem;
                font-size: .36rem;
                
            }
            .form{
                padding:0 .15rem;
                box-sizing: border-box;
                margin-top:.12rem;
                .name,.tele,.addr,.area{
                    width: 100%;
                    height: 1rem;
                    margin-bottom: 0.1rem;
                    border:0;
                    padding-left:.14rem;
                    box-sizing: border-box;
                    outline: 0;
                }
                .province,.city{
                    width: 48%;
                    height: 1rem;
                    margin-bottom:.12rem;
                }
                .province option,.city option,.area option{
                    width: 80px!important;
                }
                .moren{
                    position: relative;
                    width: 100%;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    span{
                        &:nth-child(2){
                            margin-left:.7rem;
                        }
                    }
                    .bgsa {
                        display: inline-block;
                        position: absolute;
                        left: 0rem;
                        top: .36rem;
                        width: 0.48rem;
                        height: 0.48rem;
                        border-radius: 50%;
                        border: 1px solid #ccc;
                        text-align: center;
                        line-height: 0.48rem;
                        color:#fff;
                        input {
                        vertical-align: middle;
                        font-size: 100%;
                        outline: none;
                        font-family: "Microsoft YaHei";
                        border-radius: 0;
                        }
                    }
                    .bgss {
                        background: #f00;
                        border: none;
                    }
                } 
            }
        }
        
    }
</style>
