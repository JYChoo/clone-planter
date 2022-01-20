import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'

import Main from './pages/Main.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const AboutUs = defineAsyncComponent(() => import('./pages/AboutUs.vue'))
const Privacy = defineAsyncComponent(() => import('./pages/Privacy.vue'))
const Feedback = defineAsyncComponent(() => import('./pages/Feedback.vue'))
const FeedbackList = defineAsyncComponent(() => import('./pages/FeedbackList.vue'))
const Login = defineAsyncComponent(() => import('./pages/Login.vue'))

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {  path: "/", redirect: '/main' },
        {  path: '/login', component: Login, meta: {requiresUnauth: true} },
        {  path: '/main', component: Main, meta: {requiresAuth: true}  },
        {  path: '/aboutus', component: AboutUs, meta: {requiresAuth: true} },
        {  path: '/privacy', component: Privacy, meta: {requiresAuth: true} },
        {  path: '/feedback', component: Feedback, meta: {requiresAuth: true} },
        {  path: '/feedbacklist', component: FeedbackList, meta: {requiresAuth: true} },
        {  path: '/:notFound(.*)', component: NotFound, meta: {requiresAuth: true} },
    ],
});

router.beforeEach(function (to, _, next) {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/login');
      }else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        console.log('auth success and redirect')
        next('/')
      }else{
        next();
      }
})

export default router;