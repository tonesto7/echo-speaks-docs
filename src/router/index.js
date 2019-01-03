import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import ConfigManager from '../services/configManager'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: ConfigManager.getRoutingConfig()
})
