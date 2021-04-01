<template>
  111
	<Suspense>
    <Todo />
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Todo from './components/Todo/index.vue';

export default defineComponent({
	name: 'App',
	components: {
		Todo,
	},
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
