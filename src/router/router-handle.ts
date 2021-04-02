import { useRouter } from 'vue-router';
import dynamicRoutes from './dynamic-routes';
import routerFetcher from './router-fetcher';

/**
 * 处理权限路由等其它操作，可以在此处重置路由页列表
 */
export default async function routerHandle() {
	const router = useRouter();
	const menuList = await routerFetcher();

	// 筛选权限路由
	const newDynamicRoutes = dynamicRoutes.map(outerV => {
		const foundMenu = menuList.find(innerV => {
			return innerV.action === outerV.name;
		});

		return {
			...outerV,
			meta: {
				...outerV.meta,
				hidden: !foundMenu,
			},
		};
	});

	// 重置当前路由表中的所有路由
	newDynamicRoutes.forEach(v => {
		router && router.addRoute('Home', v);
	});
}
