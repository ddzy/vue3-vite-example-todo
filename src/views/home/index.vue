<template>
	<div class="home-container">
		<div class="toc__wrapper">
			<!-- <router-link to="/hello-world">Hello World</router-link>
			|
			<router-link to="/todo">Todo</router-link> -->
			<template v-for="v in homeChildren" :key="v.name">
				<router-link :to="v.path">{{ v.name }}</router-link>
				|
			</template>
		</div>
		<router-view></router-view>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
	setup() {
		const router = useRouter().getRoutes();
		const homeChildren = router.find(v => {
			return v.name === 'Home';
		})?.children;

		return {
			homeChildren,
		};
	},
});
</script>
<style lang="scss" scoped></style>
