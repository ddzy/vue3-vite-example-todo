import api from '@/api/api';

/**
 * 获取权限菜单
 * @returns
 */
export default function routerFetcher() {
	return api.getMenuList();
}
