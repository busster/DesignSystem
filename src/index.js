// import * as Components from './components'

// let DesignSystem = Vue => {
//   Object.values(Components).forEach((Component) => {
//     Vue.use(Component)
//   })
// }

// export default DesignSystem

import Vue from 'vue'
import * as Components from './components'

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
