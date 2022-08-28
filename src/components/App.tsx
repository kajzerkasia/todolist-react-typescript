import React, {useEffect, useState} from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import {createTask, getTasks, ITask} from '../common/api/tasks';
import './App.css';
import {Container, Typography} from '@mui/material/';
import {AddTaskPropsT} from "./AddTask";
import CompletedTasks from "./CompletedTasks";

type AppPropsT = {};

function App({}: AppPropsT): React.ReactElement {
    const [tasks, setTasks] = useState<ITask[]>([]);

    const loadTasks = () => {
        getTasks().then(response => {
            setTasks(response.data)
        });
    }

    const onNewTaskSubmit: AddTaskPropsT['onNewTaskSubmit'] = async ({text, isCompleted}) => {
        await createTask({text, isCompleted})
        loadTasks()
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <Container sx={{display: 'flex', justifyContent: 'center', marginTop: '10vh'}}>
            <div className='App'>
                <Typography>TODO App</Typography>
                <AddTask onNewTaskSubmit={onNewTaskSubmit}/>
                <TaskList tasks={((tasks).filter((task) => !task.isCompleted))} onTaskCompleted={async () => loadTasks()} />
                <CompletedTasks tasks={((tasks).filter((task) => task.isCompleted))} onTaskCompleted={async () => loadTasks()} />
            </div>
        </Container>
    );
}

export default App;
