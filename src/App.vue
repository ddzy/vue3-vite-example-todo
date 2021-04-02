<template>
	<div class="app-container">
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import {
	ComponentPublicInstance,
	defineComponent,
	getCurrentInstance,
	watch,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import routerHandle from '@/router/router-handle';

export default defineComponent({
	setup() {
		const app = getCurrentInstance()?.proxy;
		const route = useRoute();
		const router = useRouter();

		watch(
			() => route.name,
			() => {
				routerHandle();
			},
			{
				immediate: true,
				deep: true,
			}
		);

		return {
			route,
		};
	},
});
</script>

<style lang="scss" scoped></style>
