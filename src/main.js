import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import router from './router/router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// import './custom.scss'

/* eslint-disable id-length */

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
    render: (h) => h(App),
    router,
    store
}).$mount('#app');
