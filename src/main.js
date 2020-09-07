import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from './api'
// import api from './api/api'
import store from './store'
// Vue.prototype.http = axios;
// Vue.prototype.api = api;
import 'swiper/dist/css/swiper.min.css';
import './assets/css/reset.min.css'
import 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import 'animate.css'
import Header from './components/Header'
Vue.component(Header.name, Header)
import Footer from './components/Footer'
Vue.component(Footer.name, Footer)
import GoTop from './components/GoTop'
Vue.component(GoTop.name, GoTop)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    
    document.dispatchEvent(new Event('render-event'))
    }
}).$mount('#app')