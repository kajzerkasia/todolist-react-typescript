import React, {AnimationEventHandler, useState} from 'react';
import {Checkbox} from '@mui/material';
import {Typography} from '@mui/material/';
import './App.css';
import {ITask, updateTask} from "../common/api/tasks";

type TaskPropsT = ITask & {
    onTaskCompleted: () => Promise<void>;
}

const Task = ({text, id, isCompleted, onTaskCompleted}: TaskPropsT) => {
    const [checked, setChecked] = useState(isCompleted);
    const [isAnimationActive, setIsAnimationActive] = useState(false);

    const onAnimationEnd: AnimationEventHandler<HTMLSpanElement> = async (event) => {
        if (event.animationName === 'disappear') {
            setIsAnimationActive(false);
            await updateTask(id, {isCompleted: !checked});
            setChecked(!checked);
            await onTaskCompleted();
        }
    };

    const toggleAnimationActive = () => {
        setIsAnimationActive(isNowActive => !isNowActive);
    };

    return (
        <div className="task">
            <Typography>
            <span aria-hidden="true" className={'animation-element' +
                (isAnimationActive ?
                    (!checked ? ' active' : ' inverted active')
                    : (!checked ? '' : ' inverted'))}
                  onAnimationEnd={onAnimationEnd}></span>
                {text}
                <Checkbox className='checkbox' onChange={toggleAnimationActive} checked={checked} />
            </Typography>
        </div>
    );
};

export default Task;
