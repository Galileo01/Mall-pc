# Mall-Pc  v1.2.0

## 项目介绍
version-1.3.0

1. 完成移动端[mall](https://github.com/Galileo01/Mall-source-code-repository) 之后，使用相同 api  , 参照 [蘑菇街](https://www.mogu.com/) 官网 ，编写的 对应pc 端商城



     

## 功能简述
* 基本功能和 mall 项目 差不多，新功能主要集中在购物车部分   
  新增的功能 ：
1. 购物车 页面 功能的新增  
   支持 商品个数的直接 修改  
   显示商品小计  
   支持直接删除 某个商品
   等
2. 支持通过 全局 的导航栏 回到首页，购物车，等界面
3. 与移动端 项目不同的是 没有 个人profile 界面

## 新增知识点  
1. home 组件 的上拉加载更多 通过 原生 交叉观察器（intersectionObserver） 实现   &nbsp;&nbsp; &nbsp;&nbsp;相关教程见[阮一峰的博客](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)  

2. 在 此Mall-pc 项目中，使用了 嵌套路由 实现了更复杂的 页面跳转

## 主要技术栈
+ vue-2.6.11
+ vuex-3.1.2
+ vue-router-3.1.3 
+ vue-lazyload
+ js-md5
+ 

## 项目安装
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
``` 
### Api 结构
和移动端项目 mall 一致，[移步mall项目](https://github.com/Galileo01/Mall-source-code-repository)

查看码云pages 服务 [查看演示](http://ego-git.gitee.io/mall_pc_exhibition_warehouse)

目录结构 [见](./src/tree.txt)
