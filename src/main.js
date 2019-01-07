import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import VueTreeNavigation from 'vue-tree-navigation'
import ConfigManager from './services/configManager'

import VueAnalytics from 'vue-analytics'

const filter = (text, length, clamp) => {
  clamp = clamp || '...'
  var node = document.createElement('div')
  node.innerHTML = text
  var content = node.textContent
  return content.length > length ? content.slice(0, length) + clamp : content
}

Vue.filter('truncate', filter)
Vue.component('icon', Icon)

Vue.config.productionTip = false

Vue.use(VueTreeNavigation)

Vue.use(VueAnalytics, {
  id: ConfigManager.getBaseConfig().analyticId,
  checkDuplicatedScript: true,
  router
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
