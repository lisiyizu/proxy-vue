import Vue from './vue.js'

Vue.directive('model', {
  update (el, binding, node, oldNode) {
    el.value = binding.value

    el.addEventListener('input', e => {
      binding.value = e.target.value

      // 更新dom后，保持focus状态
      // this._focus = true
    })

    // if (this._focus) {
    //   console.log(1111)
    //   el.focus()
    // }
  }
})

const vm = new Vue({
  el: 'body',
  data () {
    return {
      msg: 'hello world'
    }
  },
  render () {
    return (dom) => dom.div({
      class: 'test'
    },
      dom.p({
        '@click': (e) => alert('you click this p node!')
      }, this.msg),
      dom.input({
        '$model': 'msg',
        type: 'text'
      })
    )
  }
})

// setInterval(_ => {
//   vm.msg = 'hello world =>>>' + new Date()
// }, 1000)