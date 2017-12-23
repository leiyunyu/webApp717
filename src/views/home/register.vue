<template>
    <div class="register">
        <header class="header">
            <router-link to="/home/mine"><</router-link>
            <router-link to="/register">注册</router-link>
            <router-link to="/login">登录</router-link>
        </header>
        <section class="login_section">
            <p><input type="text" placeholder="请输入您的手机号" v-model="tele"></p>
            <p><input type="password" placeholder="请输入您的密码" v-model="password"></p>
            <button @click="register">确定</button>
        </section>
    </div>
</template>

<script>
export default {
    name: 'myRegister',
    data () {
        return {
            tele: '',
            password: ''
        }
    },
    methods: {
        register () {
            if(!(/^1[34578]\d{9}$/.test(this.tele))){
                return;
            }
            this.$http.post('/user/user_register', {
                tele: this.tele,
                password: this.password
            }).then(res => {
                console.log(res.data);
                if(res.data.code === '1'){
                    this.tele = '';
                    this.password = ''
                    this.$router.push({name: 'login'});
                }else if(!res.data){
                    alert('adsds')
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .register{
        width: 100%;
        height: 100%;
        display: flex;
        background:#f4f4f4;
        flex-direction: column;
        .header{
            width: 100%;
            height: 1rem;
            background: #fff;
            border: 1px solid #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:0 .2rem;
            box-sizing: border-box;
            a:nth-child(2){
                font-size:.4rem
            }
            a:nth-child(3){
                color:#f00;
            }
        }
        .login_section{
            flex:1;
            p{
                &:nth-child(1){
                    margin-top: 0.15rem;
                }
                width: 100%;
                height: 1rem;
                background: #fff;
                padding:0 .25rem;
                box-sizing: border-box;
                input{
                    width:100%;
                    height:100%;
                    border:0;
                    outline: 0;
                }
            }
            button{
                margin-top: 0.35rem;
                width: 70%;
                height: 0.9rem;
                background: #f00;
                border-radius: .45rem;
                border:0;
                outline: 0;
                margin-left: 15%;
                color:#fff;
            }
        }
    }
</style>
