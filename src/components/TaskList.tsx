import React from 'react';
import Task from './Task';
import { Typography } from '@mui/material/';
import {ITask} from "../common/api/tasks";

type TaskListPropsT = {
	tasks: ITask[];
	onTaskCompleted: () => Promise<void>;
}


const TaskList = ({tasks, onTaskCompleted} : TaskListPropsT) => {

	return (
		<>
			<div className='active'>
				<Typography>Tasks TODO</Typography>
				{tasks.map(task => <Task key={task.id} id={task.id} text={task.text} isCompleted={task.isCompleted} onTaskCompleted={onTaskCompleted} />)}
			</div>
			<hr />
		</>
	);
};

export default TaskList;
