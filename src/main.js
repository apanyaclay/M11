import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import App from './App.vue'
import Create from './components/UserAdd.vue'
import Edit from './components/UserEdit.vue'
import Index from './components/UserList.vue'

// Vue.use(VueRouter)

// Vue.config.productionTip = false

const routes = [
    {
        name: 'Create', 
        path: '/create',
        component: Create,
    },
    {
        name: 'Edit', 
        path: '/edit/:id',
        component: Edit,
    },
    {
        name: 'Index', 
        path: '/',
        component: Index,
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(), routes
})

const app = Vue.createApp(App)
app.use(router)

app.mount('#app')