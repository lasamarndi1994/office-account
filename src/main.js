import { createApp,defineAsyncComponent } from 'vue' 

import { createPinia } from 'pinia'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
	position : 'bottom-right',
	timeout: 2000,
	hideProgressBar : true,
};


import httpClient  from  './service/http';
window.http = httpClient;

import { tooltip } from './tooltip';



const VueSubmit = defineAsyncComponent(() =>
  import('./components/VueSubmit.vue')
)
const Modal = defineAsyncComponent(() =>
  import('./components/Modal.vue')
)


import vueSweetalert from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'animate.css';

const sweetOptions = {
	confirmButtonColor: '#41b882',
	cancelButtonColor: '#ff7674',
  };




import App from './App.vue'
import router from './router'


import responseMixin from './mixins/response';

// import bundle from 'bootstrap/dist/js/bootstrap.bundle'
import './assets/main.css'

const app = createApp(App)
app.component("v-submit", VueSubmit);
app.component("v-modal",Modal);


app.use(createPinia())
app.use(router)
app.use(vueSweetalert,sweetOptions);

app.use(Toast, options)
app.directive('tooltip', tooltip)


app.mixin(responseMixin)
//app.provide('http',httpClient)
app.mount('#app')