export default {
    addCount(state, index) {
        state.cartList[index].count++;
    },
    addGood(state, good) {
        state.cartList.push(good);
    },
    //减少个数
    decCount(state, index) {
        state.cartList[index].count--;
    },

    changeCheck(state, { index, pre }) {
        state.cartList[index].checked = !pre;
    },
    uncheckAll(state) {
        state.cartList.forEach(value => {
            value.checked = false;
        })
    },
    checkAll(state) {
        state.cartList.forEach(value => {
            value.checked = true;
        })
    },
    removeItem(state, index) {
        //移除 对应 下标的元素
        state.cartList.splice(index, 1);
    },
    removeSome(state) {
        const tempArr = [];
        //将选中 元素 设置为remove
        state.cartList.forEach((value, index) => {
            if (value.checked)
                state.cartList[index] = 'remove';
        });
        state.cartList.forEach((value, index) => {
            if (value !== 'remove') {
                tempArr.push(value);
            }
        });
        state.cartList = tempArr;
    },
    changeNavShow(state,payload) {
        state.isshowNav =payload;
    },
    getUserData(state,userdata)
    {
        state.userdata=userdata;
    }
}