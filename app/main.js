import Vue from 'nativescript-vue'
import App from './components/App'

import RadListView from 'nativescript-ui-listview/vue';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';
// import { FontIcon } from 'nativescript-vue-fonticon';

import Vuex from 'vuex';
import store from './store';

Vue.config.silent = (TNS_ENV === 'production')

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './assets/css/fontawesome.min.css',
  'far': './assets/css/regular.min.css',
  'fas': './assets/css/solid.min.css',
  'fab': './assets/css/brands.min.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

// Vue.use(FontIcon, {
//   componentName: 'FontIcon', // <-- Optional. Will be the name for component icon.
//   debug: true, // <-- Optional. Will output the css mapping to console.
//   paths: {
//     fa: './assets/css/fontawesome.min.css',
//   }
// })

Vue.use(RadListView);
Vue.use(Vuex);


new Vue({
  store: new Vuex.Store(store),
  render: h => h('frame', [h(App)])
}).$start()
