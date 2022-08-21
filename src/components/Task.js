import React, {useState, useEffect, useRef} from 'react';
import {Checkbox} from '@mui/material';
import {Typography} from '@mui/material/';
import './App.css';
import {updateTask} from "../common/api/tasks";

const Task = props => {
    const {text, id, isCompleted} = props.task;
    const [checked, setChecked] = useState(isCompleted);
    const [isAnimationActive, setIsAnimationActive] = useState(false);

    const onAnimationEnd = async (event) => {
        if (event.animationName === 'disappear') {
            setIsAnimationActive(false);
            await updateTask(id, {isCompleted: !checked});
            setChecked(!checked);
            await props.onTaskCompleted();
        }
    };

    const toggleAnimationActive = () => {
        setIsAnimationActive(isNowActive => !isNowActive);
    };

    return (
        <div className="task">
            <Typography>
            <span aria-hidden="true" className={'animation-element' + (isAnimationActive ? ' active' : '')} onAnimationEnd={onAnimationEnd}></span>
                {text}
                <Checkbox className='checkbox' onChange={toggleAnimationActive} checked={checked} />
            </Typography>
        </div>
    );
};

export default Task;
