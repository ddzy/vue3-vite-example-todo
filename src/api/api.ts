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
};
