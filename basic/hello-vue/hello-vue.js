var vals = {
  msg: 'hello vue!',
  seen: false,
  rawHtml: '<span style="color:red">Surprise Mother Fuck!</span>',
  color: 'red',
}
// 禁用响应属性
// Object.freeze(vals)

var vue = new Vue({
  el: '#app',
  data: vals,
  methods: {
    clickInner: function () {
      console.log('Inner: Thank you for being so obedient')
    },
    clickOutter: function () {
      console.log('Outter: Thank you for being so obedient')
    },
  },

  // hook 函数
  // 1.beforeCreate, 实例化初始化后, 数据观测等回调配置开始之前
  beforeCreate: function () {
    console.log('start creating!')
  },
  // 2.created, 数据观测等回调配置后
  created: function () {
    console.log('create OK!')
  },
  // 3.beforeMount, 模板渲染函数调用前
  beforeMount: function () {
    console.log('start mounting!')
  },
  // 4.mounted, 模板渲染OK
  mounted: function () {
    console.log('mount OK!')
  },
  // 5.beforeUpdate 每次更新前, 没有watch更针对
  beforeUpdate: function () {
    // console.log("start updating!")
  },
  // 6.updated 更新后
  updated: function () {
    // console.log("update OK!")
  },
})

vue.$watch('msg', function (newVal, oldVal) {
  console.log(oldVal + '==>' + newVal)
})

setTimeout(() => {
  vue.$data.msg = 'hello huijia step1!'
}, 1000)

setTimeout(() => {
  vals.msg = 'hello huijia step2!'
}, 2000)

setTimeout(() => {
  vals.seen = true
  vals.color = 'green'
}, 2000)
