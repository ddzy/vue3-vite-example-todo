<template>
	<div class="login-container">
		<h1>登录页</h1>
		<br />
		<button @click="loginIn">登录</button>
	</div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
	setup() {
		const app = getCurrentInstance()?.proxy;

		function loginIn() {
			localStorage.setItem('__user_token__', 'test_token');

			app?.$router.push('/home');
		}

		return {
			loginIn,
		};
	},
});
</script>
<style lang="scss" scoped>
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
