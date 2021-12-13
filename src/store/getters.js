export const getTradeResult = (state) => {  //ekrana yazdırmayı sağlıyor...
    return {
        purchase: state.purchase,
        sale: state.sale,
        balance: state.balance,
    }
}