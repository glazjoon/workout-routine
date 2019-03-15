import Vue from 'nativescript-vue'
import App from './components/App'

import RadListView from 'nativescript-ui-listview/vue';

import Vuex from 'vuex';
import store from './store';

Vue.config.silent = (TNS_ENV === 'production')

Vue.use(RadListView);
Vue.use(Vuex);


new Vue({
  store: new Vuex.Store(store),
  render: h => h('frame', [h(App)])
}).$start()
