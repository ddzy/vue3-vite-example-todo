export interface ITodoItem {
	_id: string
	content: string
	status: ITodoItemStatus
	visible: boolean
}
export type ITodoItemStatus = 'done' | 'normal'
