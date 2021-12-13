import Vue from 'vue';
import Vuex from 'vuex';
import product from './modules/product';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        purchase: 0.0,  //satın alım işlemleri
        sale: 0.0,      //ürün çıkışı
        balance: 0.0        // sale - purcahese
    },
    getters,
    mutations,
    actions,
    modules: {
        product,
    }
}) 