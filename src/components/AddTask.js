import React, { useState } from 'react';
import { Button, TextField } from '@mui/material/';

const AddTask = ({
	onNewTaskSubmit
				 }) => {
	const [newTask, setNewTask] = useState('');

	const inputHandler = event => {
		setNewTask(event.target.value);
	};

	const submitHandler = async () => {
		await onNewTaskSubmit({
			text: newTask,
			isCompleted: false,
		})
		setNewTask('');
	};

	return (
		<>
			<TextField value={newTask} onInput={inputHandler} sx={{ width: '50vw' }} size='small'></TextField>
			<Button onClick={submitHandler} variant='contained' size='medium'>
				add task
			</Button>
			<hr />
		</>
	);
};

export default AddTask;
