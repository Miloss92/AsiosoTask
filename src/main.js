import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { Vuelidate } from 'vuelidate';
import vBlur from 'v-blur'
import { JwPagination } from 'jw-vue-pagination';

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('jw-pagination', JwPagination); 

import Home from './components/Home.vue';
import About from './components/About.vue';
import Blog from './components/Blog.vue';
import Contact from './components/Contact.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(vBlur);


const routes = [
  { path: '/', component: Home},
  { path: '/home', component: Home},
  { path: '/about', component: About},
  { path: '/blog', component: Blog},
  { path: '/contact', component: Contact}
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
