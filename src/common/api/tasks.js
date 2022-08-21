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

export async function updateTask(id, task) {
	return instance.patch(`tasks/${id}`, task);
}

export async function deleteTask(id) {
	return instance.delete(`tasks/${id}`);
}