<template>
	<div class="todo-container">
		<div class="todo-logo__wrapper">
			<h3>Todo Demo</h3>
		</div>
		<div class="todo-control__wrapper">
			<div class="control__input">
				<input type="text" v-model="state.content" />
			</div>
			<div class="control-button__list">
				<button class="control-button__item" @click="searchTodo">搜索</button>
				<button class="control-button__item" @click="addTodo">添加</button>
				<button class="control-button__item" @click="visibleTodo">
					显示/隐藏已完成的待办
				</button>
			</div>
		</div>
		<div class="todo-display__wrapper">
			<ul class="display__list" v-if="!state.loading">
				<li class="display__item" v-for="v in triggerTodoList" :key="v._id">
					<div class="display__content">
						<span>{{ v.content }}</span>
						<span>
							{{ `（${v.status === 'done' ? '已完成' : '未完成'}）` }}
						</span>
					</div>
					<div class="display__functional">
						<button
							class="display__deleter functional__item"
							@click="deleteTodo(v._id)"
						>
							<span>❎</span>
						</button>
						<button
							class="display__done functional__item"
							@click="doneTodo(v._id)"
						>
							<span>✅</span>
						</button>
					</div>
				</li>
			</ul>
			<span v-else>加载中。。。</span>
		</div>
	</div>
</template>
<script lang="ts">
import * as APITYPE from '@/@types/api-types';
import {
	computed,
	defineComponent,
	getCurrentInstance,
	onMounted,
	reactive,
} from 'vue';

export default defineComponent({
	name: 'Todo',
	setup() {
		const app = getCurrentInstance()?.proxy;
		const state: {
			todoList: APITYPE.ITodoItem[];
			content: string;
			loading: boolean;
		} = reactive({
			todoList: [], // 待办列表
			content: '', // 待办输入框的内容
			loading: false, // 加载状态
		});

		onMounted(async () => {
			state.loading = true;
			state.todoList = (await app?.$api.getTodoList()) as APITYPE.ITodoItem[];
			state.loading = false;
		});

		const triggerTodoList = computed(() => {
			return state.todoList.filter(v => {
				return v.visible;
			});
		});

		function addTodo() {
			if (!state.content) {
				return;
			}

			state.todoList = state.todoList.concat({
				_id: `${state.todoList.length}`,
				content: state.content,
				visible: true,
				status: 'normal',
			});
			state.content = '';
		}

		function doneTodo(_id: string) {
			state.todoList = state.todoList.map(v => {
				return {
					...v,
					status: v._id === _id ? 'done' : v.status,
				};
			});
		}

		function deleteTodo(_id: string) {
			state.todoList = state.todoList.filter(v => {
				return v._id !== _id;
			});
		}

		function visibleTodo(_id: string) {
			state.todoList = state.todoList.map(v => {
				return {
					...v,
					visible: v.status === 'done' ? !v.visible : v.visible,
				};
			});
		}

		function searchTodo() {
			state.todoList = state.todoList.filter(v => {
				return v.content.includes(state.content);
			});
		}

		return {
			state,
			addTodo,
			doneTodo,
			deleteTodo,
			visibleTodo,
			searchTodo,
			triggerTodoList,
		};
	},
});
</script>
<style lang="scss" scoped>
.todo-container {
	width: fit-content;
	margin: 0 auto;
	.todo-control__wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		.control-button__list {
			margin-left: 12px;
			.control-button__item:not(:first-child) {
				margin-left: 6px;
				cursor: pointer;
			}
		}
	}
	.todo-display__wrapper {
		.display__list {
			list-style-type: none;
		}
		.display__item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			border: 1px solid #000;
			&:not(:first-child) {
				margin-top: 6px;
			}
			& {
				padding: 6px;
			}
			.display__functional {
				display: flex;
				.functional__item {
					display: flex;
					justify-content: center;
					align-items: center;
					margin-left: 6px;
				}
			}
		}
	}
}
</style>
