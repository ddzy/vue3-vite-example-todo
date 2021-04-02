import * as APITYPE from '@/@types/api-types';

export default {
	fetchUserInfo(
		userId: string
	): Promise<{
		_id: string;
		name: string;
		email: string;
	}> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					_id: '60585705fa1e3c002939b6c8',
					name: 'duanzhaoyang',
					email: 'duanzhaoyang@11.top',
				});
			}, 2000);
		});
	},
	/**
	 * 获取 Todo 列表
	 * @returns
	 */
	getTodoList(): Promise<APITYPE.ITodoItem[]> {
		return new Promise(resolve => {
			setTimeout(() => {
				const statusList: APITYPE.ITodoItemStatus[] = ['done', 'normal'];
				const result: APITYPE.ITodoItem[] = new Array(6).fill(0).map((v, i) => {
					return {
						_id: `${i}`,
						content: `待办事项${i}`,
						status: statusList[~~(Math.random() * statusList.length)],
						visible: true,
					};
				});

				resolve(result);
			}, 2000);
		});
	},
	/**
	 * 获取权限菜单
	 * @returns
	 */
	getMenuList(): Promise<APITYPE.IMenuItem[]> {
		return new Promise(resolve => {
			setTimeout(() => {
				const menuList = [
					{
						action: 'HelloWorld',
						permissions: [],
					},
					{
						action: 'Todo',
						permissions: [],
					},
				];

				resolve(menuList);
			}, 2000);
		});
	},
};
