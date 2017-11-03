import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './redux';

const Map = () =>
<div style={{height: '100%', display: 'block', width: '100vw', background: 'grey'}}>map</div>

const Tasks = ({tasks}) =>
<div>
    {tasks.map((task) =>
        <Task {...task} key={task.id}/>
    )}
</div>

const Task = ({id, label, date}) =>
<div>
    <span>{date}</span>
    <span>{label}</span>
    <p>
        <button>Edit</button>
        <button>Delete</button>
    </p>
</div>

const NewTaskMenu = ({handlers}) =>
<div>
New Task commence
</div>

class Dashboard extends Component {
    render() {
        const { basicData } = this.props;
        return(
            <div>
                <Map></Map>
                <Tasks tasks={[{date: 'Now', label: 'Just plumb my bumb', id: 25}]}></Tasks>
                <NewTaskMenu></NewTaskMenu>
            </div>
        );
    }
}

export default connect(({ Dashboard: { basicData } }) => {
    return { basicData };
}, actions)(Dashboard)
