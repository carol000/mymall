import Vue from 'vue';
import VueRouter from 'vue-router'


const Order = () => import('../views/cart/cart');
const Home = () => import('../views/home/home');
const Category = () => import('../views/category/category');
const Profile = () => import('../views/profile/profile');
const Detail = () => import('../views/detail/Detail');

Vue.use(VueRouter);


const routes = [ //注意此处的routes  不能写成routers 否则路由内容渲染不出来
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/categry',
    component: Category,
    name: 'categry'
  },
  {
    path: '/order',
    component: Order,
    name: 'order'
  },
  {
    path: '/my',
    component: Profile,
    name: "my"
  },
  {
    path: '/detail/:id',
    component: Detail,
    props: true,
    name: "Detail"
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router;