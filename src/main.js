import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.mixin({
  data() {
    return {
      // header: new Headers({'Content-type': 'application/json', 'Authorization': 'Basic ' + btoa('beachex:beachex')})
      axiosOptions: {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Basic ' + btoa('beachex:beachex')
        }
      }
    }
  },
  methods: {
    getQueryParams() {
      let q = this.$route.query.species;
      return q = Array.isArray(q) ? q : q != undefined ? [q] : [];
    },
    getDate(i) {
      let d = new Date(i);
      return (d.getDate() > 9 ? d.getDate() : "0" + d.getDate()) + "." + (d.getMonth()+1) + "." + d.getFullYear();
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
