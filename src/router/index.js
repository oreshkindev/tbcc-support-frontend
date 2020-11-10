import Vue from 'vue'
import VueRouter from 'vue-router'

import Signin from '../views/Signin.vue'
import Home from '../views/Home.vue'
import Channel from '../views/Channel.vue'
import Dialog from '../views/Dialog.vue'
import Documentation from '../views/Documentation.vue'
import Issues from '../views/Issues.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Signin',
            component: Signin
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/channel',
            name: 'Channel',
            component: Channel,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: '/channel/dialog/:id',
                    name: 'Dialog',
                    component: Dialog,
                    meta: {
                        requiresAuth: true
                    }
                }
            ]
        },
        {
            path: '/documentation',
            name: 'Documentation',
            component: Documentation,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/issues',
            name: 'Issues',
            component: Issues,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const authUser = JSON.parse(window.localStorage.getItem('session_data'))

        if (!authUser || !authUser.user.token) {
            next({ name: 'Signin' })
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router
