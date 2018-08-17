import * as Components from './components'

let DesignSystem = Vue => {
  Object.values(Components).forEach((Component) => {
    Vue.use(Component)
  })
}

export default DesignSystem
