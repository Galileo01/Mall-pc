import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
export default new Vuex.Store({
  state: {
    cartList: [{ "image": "//s11.mogucdn.com/mlcdn/c45406/180623_1l8jlga277egb5cih5ilkdge0kb61_800x1200.jpg", "title": "t恤女短袖2018新款夏学生宽松韩版ulzzang百搭条纹ins超火的上衣", "iid": "1m4s06m", "desc": "t恤女短袖2018新款夏学生宽松韩版ulzzang百搭条纹ins超火的上衣", "price": "27.90", "count": 1, "checked": true }, { "image": "//s5.mogucdn.com/mlcdn/c45406/180625_03ac7183ck6h3cee7akf747c3i1d4_640x960.jpg", "title": "【仲陌美】2018春秋季新款原宿风长袖T恤女bf潮学生韩版拼接白色复古港味宽松百搭上衣打底", "iid": "1m4xiic", "desc": "【仲陌美】2018春秋季新款原宿风长袖T恤女bf潮学生韩版拼接白色复古港味宽松百搭上衣打底", "price": "38.50", "count": 1, "checked": true }, { "image": "//s11.mogucdn.com/mlcdn/c45406/180818_8fid15g78c3i80854aa6j855hbbcj_640x960.jpg", "title": "2018春秋冬白色体恤女长袖宽松t恤女打底衫韩版新款圆领纯棉百搭上衣", "iid": "1m7dvsq", "desc": "2018春秋冬白色体恤女长袖宽松t恤女打底衫韩版新款圆领纯棉百搭上衣", "price": "39.00", "count": 1, "checked": true }],

    userdata: {},
    isshowNav:true
  },
  mutations,
  actions,
  modules: {
  }
})
