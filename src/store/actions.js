import Vue from 'vue';


export const setTradeResult = ({ state, commit }, tradeResult) => {
    commit("updateTradeResult", tradeResult);
    let tradeData = {
        purchase: state.purchase,
        sale: state.sale
    }
    Vue.http.put("https://urun-islemleri-prod-f85ed-default-rtdb.firebaseio.com/trade-result.json", tradeData)
        .then(res => {
            console.log(res);
            console.log(state.purchase);
            console.log(state.sale);
            console.log(state.balance);
        })

}


export const getTradeResult = ({ commit }) => {

    Vue.http.get("https://urun-islemleri-prod-f85ed-default-rtdb.firebaseio.com/trade-result.json")
        .then(res => {
            console.log(res);
            commit("updateTradeResult", res.body)
        })

}