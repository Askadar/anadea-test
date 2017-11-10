import React from 'react';
import moment from 'moment';

import './Tasks.css';

export const ListedTask = ({id, task, taskType, description, date: rawDate}) =>{
    const date = moment(rawDate);
    let minutesDifference = moment().diff(date, 'minutes');

    return (<div className="task task-inline">
        <span className="task-row task-date">{
            minutesDifference > - 60 && minutesDifference < 120 ?
            'Your specialist should arive shortly' :
            minutesDifference >= 120 ?
            `Your specialist should've arrived ${date.fromNow()}. Have you liked our service? ` :
            `Your specialist should arrive ${date.fromNow()}`
        }</span>
        <span className="task-row task-label">
            {`I need ${taskType.toLowerCase()} to ${task.toLowerCase()}${description ? ', ' + description.toLowerCase() : ''}`}
        </span>
    </div>);
}
const Tasks = ({ tasks, newTaskActive, addNewTask, deleteTask, editTask }) =>
<div className="tasks">
    <div className="task">
        <button className={`task-row task-row--centered task-new button button-alt${newTaskActive ? ' active' : ''}`} onClick={addNewTask}>New Task</button>
    </div>
    {tasks.map((task) =>
        <Task {...task} key={task.id}
        deleteTask={deleteTask} editTask={editTask}/>
    )}
</div>

const Task = ({id, task, taskType, description, date: rawDate, editTask, deleteTask, ...restTaskData}) =>{
    const date = moment(rawDate);
    let minutesDifference = moment().diff(date, 'minutes');
    return (
        <div className="task">
            <span className="task-row task-date">{
                minutesDifference > - 60 && minutesDifference < 120 ?
                'Your specialist should arive shortly' :
                minutesDifference >= 120 ?
                `Your specialist should've arrived ${date.fromNow()}. Have you liked our service? ` :
                `Your specialist should arrive ${date.fromNow()}`
            }</span>
            <span className="task-row task-label">
                {`I need ${taskType.toLowerCase()} to ${task.toLowerCase()}${description ? ', ' + description.toLowerCase() : ''}`}
            </span>
            <div className="task-row task-actions">
                <button
                    className="button button-primary"
                    onClick={() => editTask({
                        id, taskType, task, description, ...restTaskData})}>Edit</button>
                <button
                    className="button button-alt"
                    onClick={() => deleteTask(id)}>Delete</button>
            </div>
        </div>
    );
}

export default Tasks
