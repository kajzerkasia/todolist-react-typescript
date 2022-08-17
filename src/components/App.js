import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import {createTask, getTask, getTasks} from '../common/api/tasks';
import './App.css';

import { Container, Typography } from '@mui/material/';

function App() {
	const [tasks, setTasks] = useState([]);

	const onNewTaskSubmit = async ({text, isCompleted}) => {
		await createTask({text, isCompleted})
		getTasks().then(response => {
			setTasks(response.data)
		});
	}

	useEffect(() => {
		getTasks().then(response => {
			setTasks(response.data);
		});
	}, []);

	return (
		<Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '10vh' }}>
			<div className='App'>
				<Typography>TODO App</Typography>
				<AddTask onNewTaskSubmit={onNewTaskSubmit} />
				<TaskList tasks={tasks} />
			</div>
		</Container>
	);
}

export default App;
