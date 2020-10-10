[TOC]

## vue组件

组件的通过在js内些template, 可以在html端简单地进行复用, 比如实现按钮计数的功能

* 组件声明要在new Vue的前面, 也就是先注册组件才能使用, Vue.com... 是全局注册, 而在new Vue内的components值来进行局部注册.
* 组件的data必须是func, 这样才能保证每个复用都是独自的拷贝
* 可以通过props设置一些属性, 这些属性可以在模板中显示, 可以在组件复用时指定
* 可以通过emit来抛出事件, 需要注意驼峰和分隔符的表示方式, 事件全部使用分隔符, function全部使用驼峰表示
* 组件名字也有命名问题, 如果使用驼峰, 那么使用驼峰和分隔符都可以进行使用, 而是要分割符, 那只能通过分隔符进行复用, 建议全部使用分隔符

## 单文件组件

也就是使用vue文件了, 解决了上述在js文件声明组件的一系列问题

* 全局声明, 组件名不能重复
* 模板缺乏语法高亮, 多行支持不友好
* 不支持CSS
* 无法使用webpack等构建工具

## 安装cnpm, vue-cli和webpack

``` bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install -g @vue/cli
cnpm install -g webpack
```

## 使用vue-cli来创建项目

``` bash
cd aim/path
vue ui
```

打开vue ui的浏览器界面, 然后创建自己的项目

* 包管理选用npm , 其余自己看着选
* App.vue是程序的入口函数
* components内的每个文件都是一个单文件组件
