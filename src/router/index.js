import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import ConfigManager from '../services/configManager'

Vue.use(VueRouter)
Vue.use(Meta)

export default new VueRouter({
  routes: ConfigManager.getRoutingConfig()
})
