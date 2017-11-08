import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as dashboardActions } from './redux';
import { actions as newTaskActions } from './NewTask/redux';
import { createTask } from '../commonActions';
import Tasks from './Tasks';
import Drawer from './NewTask';
import Map from '../Map';

import './index.css';

const NewTaskMenu = ({handlers}) =>
<div>
New Task commence
</div>

const availableTasks = {
    'Plumber': [
        'Unblock a toilet',
        'Unblock a sink',
        'Fix a water leak',
        'Install a sink',
        'Install a shower',
        'Install a toilet',
    ]
}


class Dashboard extends Component {
    constructor(p){
        super(p);
        this.state = {
            status: -1,
            validationErrors: {},
            validationWarnings: {},
        }
    }
    validateAndDispatch(){
        const { address, activeType, activeTask, text, createTask } = this.props;
        const { validationErrors, validationWarnings } = this.state;
        let errors = {}, warnings = {};
        if (!address || typeof address !== 'string')
            errors.address = 'Please select address';
        if (!activeType || typeof activeType !== 'string')
            errors.type = 'Please select type of service you\'re looking for';
        if (!activeTask || typeof activeTask !== 'string' || !(availableTasks[activeType] || []).includes(activeTask))
            errors.task = 'Please select task you\'re looking for';
        if (!text && !validationWarnings.text && Object.keys(errors).length === 0)
            warnings.text = 'You might want to provide a description';
        let status = Object.keys(errors).length + Object.keys(warnings).length;
        this.setState({
            validationErrors: errors,
            validationWarnings: warnings,
            status
        });
        if (!status)
            createTask({ address, taskType: activeType, task: activeTask, description: text });
    }
    render() {
        const {
            creatingTask, addNewTask, createTask,

            address,

            activeType, selectType,
            activeTask, selectTask,
            text, updateDescription,

            tasks,
        } = this.props;
        const { validationErrors, validationWarnings, status } = this.state;
        return(
            <div className="dashboard">
                <Map
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `calc(100vh - 80px)`, minHeight: '600px'}} />}
                  mapElement={<div style={{ height: `100%` }} />}></Map>
                <Tasks tasks={tasks} newTaskActive={creatingTask} addNewTask={addNewTask}></Tasks>
                <Drawer
                    active={creatingTask}
                    address={address}
                    type={{selectType, activeType}}
                    task={{selectTask, activeTask}}
                    description={{text, updateDescription}}
                    validateAndDispatch={(data) => this.validateAndDispatch(data)}
                    validation={{validationErrors, validationWarnings}}
                    validated={status <= 0}
                    availableTasks={availableTasks}
                />
            </div>
        );
    }
}

export default connect(({ Dashboard: { creatingTask }, NewTask: { activeType, activeTask, text }, Map: { address }, History: { tasks } }) => {
    return { creatingTask, address, activeType, activeTask, text, tasks: tasks.slice(-3) };
}, { ...dashboardActions, ...newTaskActions, createTask } )(Dashboard)
