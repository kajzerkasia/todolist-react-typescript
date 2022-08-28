import React, { useState } from 'react';
import {TaskListPropsT} from "./TaskList";
import Task from "./Task";
import './App.css';
import {Checkbox, Typography} from "@mui/material";

const CompletedTasks = ({tasks, onTaskCompleted} : TaskListPropsT) => {
    const [isVisible, setIsVisible] = React.useState(false);

    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIsVisible((wasVisible) => !wasVisible);
    };

    return (
        <>
            <Typography>
                Show completed tasks
            <Checkbox onClick={clickHandler} checked={isVisible}/>
            </Typography>

            {isVisible ?
                    <span>
                    {tasks.map(task => <Task key={task.id} id={task.id} text={task.text} isCompleted={task.isCompleted} onTaskCompleted={onTaskCompleted} />)}
                    </span>
                : ''}
        </>
    );
}

export default CompletedTasks;