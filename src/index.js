import Vue from 'vue'
import * as Components from './components'

Object.keys(Components).forEach(componentName => {
  Vue.component(componentName, Components[componentName])
})

export default Components
