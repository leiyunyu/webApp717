<template>
    <div class="home">
        <section class="section">
            <keep-alive include="index"><router-view></router-view></keep-alive>
        </section>
        <my-footer></my-footer>
    </div>
</template>

<script>
import myFooter from '../../components/footer/footer.vue'
export default {
    name: 'myHome',
    components: {
        myFooter
    }
}
</script>

<style scoped lang="scss">
    .home{
        width: 100%;
        height: 100%;
        background: #ccc;
        display: flex;
        flex-direction: column;
        .section{
            flex:1;
            overflow-y:scroll;
            background: #eee;
        }
        .footer{
            width: 100%;
            height: 1.2rem;
        }
    }
</style>
