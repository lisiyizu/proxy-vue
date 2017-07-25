import Vue from './vue.js'
import createData from './data.js'

/**
 * 自定义指令
 */
export default (name, options) => {
  const { update } = options

  const cb = (el, binding, vm) => {
    // 当binding.value为实例的属性时，binding的更新触发属性的更新
    // TODO 模板中统一处理
    const { value } = binding

    if (typeof(value) === 'string') {
      binding.value = vm[value]
      binding = createData(binding, val => {
        vm[value] = val
      })
    }
    update && update.call(options, el, binding, vm)
  }

  Vue._directors.set(`$${name}`, cb)
}

