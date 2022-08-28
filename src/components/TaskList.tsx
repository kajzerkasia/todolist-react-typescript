import Task from './Task';
import { Box, Typography } from '@mui/material/';
import {ITask} from "../common/api/tasks";

export type TaskListPropsT = {
	tasks: ITask[];
	onTaskCompleted: () => Promise<void>;
}


const TaskList = ({tasks, onTaskCompleted} : TaskListPropsT) => {

	return (
		<>
			<Box className='active-tasks'>
				<Typography>Tasks TODO</Typography>
				{tasks.map(task => <Task key={task.id} id={task.id} text={task.text} isCompleted={task.isCompleted} onTaskCompleted={onTaskCompleted} />)}
			</Box>
			<hr />
		</>
	);
};

export default TaskList;
