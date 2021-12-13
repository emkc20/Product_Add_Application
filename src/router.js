import Vue from 'vue'
import VueRouter from 'vue-router';
import ProductList from './components/product/productList'
import ProductSell from './components/product/productsell'
import ProductPurchase from './components/product/productPurchase'

Vue.use(VueRouter);

const routes = [
    { path: "/", component: ProductList },
    { path: "/urun-islemleri", component: ProductPurchase },
    { path: "/urun-cikisi", component: ProductSell },
    { path: "*", redirect: "/" },
]


export const router = new VueRouter({
    mode: "history",
    routes
})