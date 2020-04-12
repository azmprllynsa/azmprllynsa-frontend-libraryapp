/* eslint-disable indent */
import vue from 'vue';
import VueRouter from 'vue-router';

import Home from './view/Main/Home.vue';
import Login from './view/Main/Login.vue';
import Register from './view/Main/Register.vue';
import Dashboard from './view/Main/Dashboard.vue';
import Detail from './view/Main/DetailBook.vue';
import Test from './view/Main/Test.vue';
import Main from './view/Main/Main.vue';

vue.use(VueRouter);


const routes = [{
    path: '/',
    name: 'Main',
    component: Main,
    redirect: { name: 'Home' },
    children: [{
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        },
        {
            path: 'detail/:data',
            name: 'Detail',
            component: Detail,
        },
    ],
}];
const router = new VueRouter({
    mode: 'history',
    routes,
});
// eslint-disable-next-line eol-last
export default router;