import api from '@/api/api';

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$api: typeof api
	}
}
