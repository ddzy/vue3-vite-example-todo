import { createRouter, createWebHashHistory } from 'vue-router';
import dynamicRoutes from './dynamic-routes';
import routerBefore from './router-before';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/auth',
			name: 'Auth',
			component: () => import('@/views/auth/index.vue'),
			children: [
				{
					path: '/home',
					name: 'Home',
					component: () => import('@/views/home/index.vue'),
					children: dynamicRoutes,
				},
			],
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/views/login/index.vue'),
		},
		{
			path: '/404',
			name: 'NotFound',
			component: () => import('@/views/404/index.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/404',
		},
	],
});

router.beforeEach(routerBefore);

export default router;
