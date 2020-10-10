[TOC]

## v-bind

* 配合 `{}` 或者 `[]` 可以指定多个样式(可以理解为key)绑定, `{}` 是key-value, `[]` 是keys的set
* 可以配合三元运算符进行动态绑定

## v-if和v-show

* `v-if` 配合 `v-else-if` , `v-else` 可以实现div块的显示控制, 是直接不进行渲染的
* `v-show` 则是简单的bool值判断, 然后控制块的display属性, 来达到隐藏目的(实际已经渲染了)
* `v-for` 可以遍历array或者object的值, index, name, value并调用函数, 使用index/name作为key可以实现指向的更新, 也可以对现有元素进行重新排序

> `v-if` 进行切换时才会开始不同的渲染, 不过目前很多也是优化了的, 比如input那个例子, 当出现明显的卡顿时, 可以考虑使用 `v-show` 来替换

> `v-for` 的array, [可被监听的方法列表](https://cn.vuejs.org/v2/guide/list.html#%E5%8F%98%E6%9B%B4%E6%96%B9%E6%B3%95), 而对于object等响应式细节, [详情点击](https://cn.vuejs.org/v2/guide/reactivity.html#%E6%A3%80%E6%B5%8B%E5%8F%98%E5%8C%96%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

> `v-on` 可以监听dom的所有事件, 比如 `a` , `button` 的 `click` , `input` 的 `keyup` , `form` 的 `submit` 等等, 此外还有一些事件修饰符, 比如 `.stop` 防止事件扩散, 还有系统修饰符, 比如 `.ctrl` , 表示按下这些按键同时的事件才会被监听到.

> `v-model` 是一个语法糖(事件监听, 更新), 可以实现双向的绑定, 支持单行多行输入, 单选多选按钮, 下拉框, 多选框等.
