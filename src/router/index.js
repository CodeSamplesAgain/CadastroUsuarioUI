import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex';

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: () => import('../pages/404.vue'),
        },
        {
            path: '/',
            name: 'wrapper',
            component: () => import('../components/AppWrapper.vue'),
            children: [

                {
                    path: '/login',
                    name: 'login',
                    component: () => import('../components/Login.vue')
                },
                {
                    path: '/',
                    name: 'home',
                    component: () => import('../components/Home.vue')
                },
                {
                    path: '/recuperar-senha',
                    name: 'recuperar_senha',
                    component: () => import('../components/RecuperarSenha.vue')
                },
                {
                    path: '/nova-senha/:code',
                    name: 'nova_senha',
                    component: () => import('../components/NovaSenha.vue')
                }
            ]
        },

    ]
});

router.beforeEach(async (to, from) => {

    const store = useStore();
    // console.log(store.state.token);
    const isAuthenticated = !!store.state.token;
    // console.log(isAuthenticated);

    if (!isAuthenticated && to.name !== 'login' && to.name !== 'recuperar_senha' && to.name !== 'nova_senha') {

        console.log('login');
        return { name: 'login' }
    }
});

export default router;
