import myLogin from '../views/home/login.vue';
import myRegister from '../views/home/register.vue';
import myHome from '../views/home/home.vue';
import myHomePage from '../views/home/function/shouye.vue';
import myAssortment from '../views/home/function/assortment.vue';
import myShoppingcar from '../views/home/function/shoppingcar.vue';
import myMine from '../views/home/function/mine.vue';
import mySearch from '../components/search/search.vue'
import myDetails from '../components/details/details.vue'
import myPosition from '../views/home/function/position/position.vue';
import myForm from '../views/home/function/position/form.vue'
let routes = [
    {
        path: '/',
        redirect: 'home/shouye'
    },
    {
        path: '/login',
        name: 'login',
        component: myLogin
    },
    {
        path: '/register',
        name: 'register',
        component: myRegister
    },
    {
        path: '/home',
        name: 'home',
        component: myHome,
        children: [
            {
                path: 'shouye',
                name: 'shouye',
                component: myHomePage,
                children: [
                    {
                        path: 'details',
                        name: 'details',
                        component: myDetails
                    }
                ]
            },
            {
                path: 'assortment',
                name: 'assortment',
                component: myAssortment
            },
            {
                path: 'shoppingcar',
                name: 'shoppingcar',
                component: myShoppingcar
            },
            {
                path: 'mine',
                name: 'mine',
                component: myMine,
                meta: {
                    requireAuth: true
                },
                children: [
                    {
                        path: 'position',
                        name: 'position',
                        component: myPosition
                    },
                    {
                        path: 'form',
                        name: 'form',
                        component: myForm
                    }
                ]
            },
            {
                path: 'search',
                name: 'search',
                component: mySearch
            }
        ]
    }
];
export default routes;