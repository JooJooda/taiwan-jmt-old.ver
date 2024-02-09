import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from '../mixins'
import store from './store'

//bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { far} from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas)
library.add(far)
library.add(fab)


createApp(App)
.use(router)
.mixin(mixins)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
