import React from 'react';

import './Tasks.css';

const Tasks = ({ tasks, newTaskActive, addNewTask }) =>
<div className="tasks">
    <div className="task">
        <button className={`task-row task-row--centered task-new button button-alt${newTaskActive ? ' active' : ''}`} onClick={addNewTask}>New Task</button>
    </div>
    {tasks.map((task) =>
        <Task {...task} key={task.id}/>
    )}
</div>

const Task = ({id, label, date}) =>
<div className="task">
    <span className="task-row task-date">{date}</span>
    <span className="task-row task-label">{label}</span>
    <div className="task-row task-actions">
        <button className="button button-primary">Edit</button>
        <button className="button button-alt">Delete</button>
    </div>
</div>

export default Tasks
