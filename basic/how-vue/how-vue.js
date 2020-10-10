var obj = new Vue({
  el: '#app',
  data: {
    msg: 'how vue',
    isActive: true,
    fz: '30px',
    show: '',
    ok: true,
    // v-for
    items: ['Foo', 'Bar'],
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10',
    },
    // v-model
    message: 'input your text here!',
    checkNames: ['Go'],
    picked: 'One',
    selected: '',
    multiSel: [],
  },
  methods: {
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      if (event) {
        console.log(event)
      } else {
        alert(message)
      }
    },
    submit: function () {
      var postobj = {
        message: this.message,
        checkNames: this.checkNames,
        picked: this.picked,
      }
      alert(JSON.stringify(postobj))
    },
  },
})

// v-if需要解开注释
// var input = new Vue({
//   el: '#input',
//   data: {
//     loginType: 'username',
//   },
//   methods: {
//     changeLogin: function () {
//       if (this.loginType === 'username') {
//         this.loginType = 'email'
//       } else {
//         this.loginType = 'username'
//       }
//     },
//   },
// })

setTimeout(() => {
  obj.$data.msg = 'how vue changed'
  obj.isActive = false
  obj.fz = '50px'
  obj.$data.show = 'A'
  obj.items.push('zhj')
}, 1000)
