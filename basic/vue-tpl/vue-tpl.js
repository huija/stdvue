var obj = new Vue({
  el: '#app',
  data: {
    msg: 'vue tpl',
  },
})

setTimeout(() => {
  obj.$data.msg = 'vue tpl changed'
}, 1000)
