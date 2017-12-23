import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter);
let router = new VueRouter({
    routes
})
// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requireAuth)){
//         next({name: 'login', query:{
//             from: to.name
//         }})
//     }else {
//         next();
//     }
// })
export default router;
