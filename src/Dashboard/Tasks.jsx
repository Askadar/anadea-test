import React from 'react';

import './Tasks.css';

const Tasks = ({tasks}) =>
<div>
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
        <button className="button button-destructive">Delete</button>
    </div>
</div>

export default Tasks
