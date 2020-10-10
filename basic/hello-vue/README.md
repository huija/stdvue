[TOC]

## VUE 入门

> <https://cn.vuejs.org/v2/guide/instance.html>

* 模板填充渲染
* 数据响应, 变化监听
* 生命周期 hook: <https://cn.vuejs.org/v2/api/>

## 模板语法

> <https://cn.vuejs.org/v2/guide/syntax.html>

### 修改值

* `{{item}}` 包裹变量, 来进行模板渲染
* 禁止响应式: 在 html 块定义添加 `v-once` 可以使得后续值的更新不再生效, 但 js 内 `Object.freeze(vals)` 禁用变量的响应属性则更加彻底
* 引入 html 源码: 添加 `v-html="item"` , 可以将 item 对应的字符串变量加载为 html 源码, 但是直接替换了块内的整个内容, 相当于多了一层标签(使用影响).
* 修改 dom 的属性: `v-bind:class="item"` , 相当于将 class 属性与 item 绑定, 修改 item 值, 可以将 class 绑定到不同的 css 样式上
* 表达式支持, 支持运算|三元|string 方法

``` html
{{ item + 1 }}
{{ item ? 'YES' : 'NO' }}
{{ item.split('').reverse().join('') }}
<div v-bind:id="'list-' + item"></div>
```

### 指令控制

* `v-if` 控制 dom 是否出现
* `v-bind` 控制 dom 的属性
* `v-on` 绑定事件到 js func(如果是嵌套的事件, 可以在事件后加 `.stop` 来避免外部事件一起触发)

### 缩写

* `v-bind:` 可以缩写成 `:`
* `v-on:` 可以缩写成 `@`
