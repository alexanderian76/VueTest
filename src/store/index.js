import Vue from 'vue';
import Vuex from 'vuex';
import userModule from '@/store/userData';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {},
    modules: {
       userModule
    }
});

export default store;
