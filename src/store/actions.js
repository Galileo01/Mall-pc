export default {
    addClick({ state, commit }, payload) {
        return new Promise((resolve, reject) => {
            const findex = state.cartList.findIndex((value, index) => value.iid === payload.iid);

            if (findex >= 0)//如果已经存在当前 商品,只添加个数
            {
                commit('addCount', findex);
                resolve('商品数目加1')
            } else {      //不存在，则创建count属性
                payload.count = 1;
                payload.checked = true;
                commit('addGood', payload);
                resolve('已添加到购物车')
            }
        })
    }
}