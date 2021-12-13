import Vue from 'vue';
import { router } from '../../router';

const state = {
    products: []

}

const getters = {
    getProducts(state) {
        return state.products
    },

    getProduct(state) {
        return key => state.products.filter(item => {
            return item.key == key;
        })
    },

}

const mutations = {
    updateProductList(state, product) {
        state.products.push(product)
    },


}

const actions = {

    initApp({ commit }) {
        // Vue Resource İşlemleri....

        Vue.http.get("https://urun-islemleri-prod-f85ed-default-rtdb.firebaseio.com/product.json")
            .then(res => {
                console.log(res);
                let data = res.body;

                for (let key in data) {

                    console.log("DENEME :" + data[key].key);

                    data[key].key = key;
                    commit("updateProductList", data[key])
                }
            })



    },

    saveProduct({ dispatch, commit, state }, product) {
        // Vue Resource İşlemleri....
        Vue.http.post("https://urun-islemleri-prod-f85ed-default-rtdb.firebaseio.com/product.json", product)
            .then(res => {

                /****  ÜRÜN LİSTESİNİN GÜNCELLENMESİ ****/
                product.key = res.body.name;
                commit("updateProductList", product);
                console.log(state.products);
                /****  ALIŞ, SATIŞ, BAKİYE BİLGİLERİNİN GÜNCELLENMESİ ****/

                let tradeResult = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count,
                }

                dispatch("setTradeResult", tradeResult)

                router.push("/"); //router.replace("/")=> buda olur,kabuldür...

            })

    },

    sellProduct({ commit }, paload) {
        // Vue Resource İşlemleri....
    },

}

export default {
    state,
    getters,
    mutations,
    actions,
}
