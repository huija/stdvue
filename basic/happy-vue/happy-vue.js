// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0,
    }
  },
  props: ['name'],
  template:
    '<button v-on:click="countPlus">You clicked {{name}} {{ count }} times.</button>',
  methods: {
    countPlus: function () {
      this.count++
      // 触发一个事件, 可以被v-on捕获到, 并携带count参数
      this.$emit('count-changed', this.name, this.count)
    },
  },
})

var obj = new Vue({
  el: '#app',
  data: {
    msg: 'vue tpl',
  },
  methods: {
    handleClick: function (name, count) {
      console.log(name + ':' + count)
    },
  },
})

setTimeout(() => {
  obj.$data.msg = 'vue tpl changed'
}, 1000)
