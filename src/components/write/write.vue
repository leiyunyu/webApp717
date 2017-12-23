<template>
    <div class="write">
        <div class="address" v-for="(v, k) in address" :key="k">
            <h4><span>{{v.username}}</span><span>{{v.telephone}}</span></h4>
            <h5>{{v.address}}</h5>
            <p class="moren"><span class="bgsa" :class="{'' : isA, 'bgss': !isA}" @click="isA = !isA">√</span><span>设为默认地址</span><span class="bianji" @click="changeMsg(v.username,v.telephone,v.province,v.city,v.area,v.addressInfo,v.address,v.id)">编辑</span ><span class="shanchu" @click="deletes(v.id)">删除</span></p>
        </div>
    </div>
</template>

<script>
import {getCookie} from '../../until/until.js';
import address from '../../../server/data/address.json';
export default {
    name: 'myWrite',
    data () {
        return {
            isA: true,
            address: address.list
        }
    },
    methods: {
        deletes (id) {
            this.$http.post("/del_addresss", { id: id, token: getCookie("token") })
                .then(res => {
                    if (res.data == "jwt expired") {
                        alert('请重新登陆');
                        this.$router.push({name:'login'});
                    } else if (res.data == "err") {
                        alert('没有权限');
                    } else if (res.data == "success") {
                        alert('删除成功');
                    }
                });
            },
        changeMsg (name,tele,pro,city,area,addIn,add,id) {
                this.$http.post('/address_change', {
                    name: name,
                    tele: tele,
                    pro: pro,
                    city: city,
                    area: area,
                    addIn: addIn,
                    add: add,
                    id: id,
                }).then((res) => {
                    this.$router.push({name: 'form', params: {
                        name: name,
                        tele: tele,
                        pro: pro,
                        city: city,
                        area: area,
                        addIn: addIn,
                        add: add,
                        id: id
                    }})
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .write{
        width: 100%;
        height: auto;
        .address{
            margin-top: 0.12rem;
            width: 100%;
            height: 2.4rem;
            margin-bottom: 0.12rem;
            background: #fff;
            padding:0 .12rem;
            box-sizing: border-box;
            h4{
                width: 100%;
                height: 0.8rem;
                font-size:.38rem;
                font-weight: 400;
                line-height: 0.8rem;
                span{
                    &:nth-child(2){
                        margin-left: 0.5rem;
                    }
                }
            }
            h5{
                width: 100%;
                height: 0.9rem;
                font-size:.32rem;
                font-weight: 400;
                line-height: 0.45rem;
            }
            p{
                position: relative;
                width: 100%;
                height: 0.7rem;
                span{
                    &:nth-child(2){
                        margin-left: 0.7rem;
                    }
                }
                .bianji{
                    margin-left: 0.5rem;
                }
                .shanchu{
                    margin-left: 0.5rem;
                }
                .bgsa {
                    display: inline-block;
                    position: absolute;
                    left: 0rem;
                    top: .0rem;
                    width: 0.48rem;
                    height: 0.48rem;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                    text-align: center;
                    line-height: 0.48rem;
                    color:#fff;
                }
                .bgss {
                    background: #f00;
                    border: none;
                }
            }
        }
        
    }
</style>
