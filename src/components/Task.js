import { Checkbox } from '@mui/material';

const Task = props => {
	const { text } = props.task;

	return (
		<div>
			<p>
				{text}
				<Checkbox onClick={props.done} />
			</p>
		</div>
	);
};

export default Task;
