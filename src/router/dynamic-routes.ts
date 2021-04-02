import { RouteRecordRaw } from 'vue-router';

const dynamicRoutes: RouteRecordRaw[] = [
	{
		path: '/hello-world',
		name: 'HelloWorld',
		meta: {
			hidden: false,
		},
		component: () => import('@/views/hello-world/index.vue'),
	},
	{
		path: '/todo',
		name: 'Todo',
		meta: {
			hidden: false,
		},
		component: () => import('@/views/todo/index.vue'),
	},
];

export default dynamicRoutes;
