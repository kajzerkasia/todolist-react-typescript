import instance from './index';

export async function getTask(id) {
	return instance.get(`tasks/${id}`);
}

export async function getTasks() {
	return instance.get('tasks');
}

export async function createTask({text, isCompleted}) {
	return instance.post('tasks', {text, isCompleted});
}
