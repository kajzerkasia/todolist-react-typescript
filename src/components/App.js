import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import {createTask, getTasks} from '../common/api/tasks';
import './App.css';

import { Container, Typography } from '@mui/material/';

function App(id) {
	const [tasks, setTasks] = useState([]);

	const loadTasks = () => {
		getTasks().then(response => {
			setTasks(response.data)
		});
	}

	const onNewTaskSubmit = async ({text, isCompleted}) => {
		await createTask({text, isCompleted})
		loadTasks()
	}

	useEffect(() => {
		loadTasks();
	}, []);

	return (
		<Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '10vh' }}>
			<div className='App'>
				<Typography>TODO App</Typography>
				<AddTask onNewTaskSubmit={onNewTaskSubmit} />
				<TaskList tasks={tasks.filter(task => !task.isCompleted)} onTaskCompleted={async () => loadTasks()} />
			</div>
		</Container>
	);
}

export default App;
