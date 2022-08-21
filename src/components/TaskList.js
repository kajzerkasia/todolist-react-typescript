import React from 'react';
import Task from './Task';
import { Typography } from '@mui/material/';

const TaskList = props => {

	return (
		<>
			<div className='active'>
				<Typography>Tasks TODO</Typography>
				{props.tasks.map(task => <Task key={task.id} task={task} onTaskCompleted={props.onTaskCompleted} />)}
			</div>
			<hr />
		</>
	);
};

export default TaskList;
