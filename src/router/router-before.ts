import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export default function routerBefore(
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) {
	// 每次进入某个路由页前，都要根据 hidden 属性来决定是否有权限进入
	if (to.meta.hidden) {
		next({ name: 'NotFound' });
	} else {
		next();
	}
}
