<template>
	<div class="auth-container">
		<router-view></router-view>
	</div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import routerHandle from '@/router/router-handle';

export default defineComponent({
	setup() {
		const app = getCurrentInstance()?.proxy;
		const token = localStorage.getItem('__user_token__');

		if (!token) {
			app?.$router.push('/login');
		} else {
			routerHandle();
		}
	},
});
</script>
<style lang="scss" scoped></style>
