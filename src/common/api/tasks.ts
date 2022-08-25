import instance from './index';
import {AxiosResponse} from "axios";

export interface ITask {
	id: number;
	text: string;
	isCompleted: boolean;
}

export type NonIdentifiedTaskT = Omit<ITask, 'id'>;
export type NonIdentifiedPartialTaskT = Partial<NonIdentifiedTaskT>;

export async function getTasks(): Promise<AxiosResponse<ITask[]>> {
	return instance.get('tasks');
}

export async function createTask({text, isCompleted}: NonIdentifiedTaskT): Promise<AxiosResponse<ITask, NonIdentifiedTaskT>> {
	return instance.post('tasks', {text, isCompleted});
}

export async function updateTask(id: number, task: NonIdentifiedPartialTaskT): Promise<AxiosResponse<ITask, NonIdentifiedTaskT>> {
	return instance.patch(`tasks/${id}`, task);
}
