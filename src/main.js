import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.mixin({
  methods: {
    getQueryParams() {
      let q = this.$route.query.species;
      return q = Array.isArray(q) ? q : q != undefined ? [q] : [];
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
