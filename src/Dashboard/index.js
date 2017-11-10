import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as dashboardActions } from './redux';
import { actions as newTaskActions } from './NewTask/redux';
import { actions as historyActions } from '../History/redux';
import { createTask, deleteTask, editTask, startEditTask } from '../commonActions';
import Tasks from './Tasks';
import Drawer from './NewTask';
import Modal from './Modal';
import Map from '../Map';

import './index.css';

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
    validateAndDispatch(editId){
        const { address, activeType, activeTask, text, createTask, editTask } = this.props;
        const { validationWarnings } = this.state;
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
            if (!editId)
                createTask({ address, taskType: activeType, task: activeTask, description: text });
            else
                editTask({ id: editId, address, taskType: activeType, task: activeTask, description: text });
    }
    render() {
        const {
            creatingTask, deletingTask,
            toggleDrawer, toggleTaskDelete,

            // createTask,
            deleteTask,
            startEditTask,

            address,

            editing,
            activeType, selectType,
            activeTask, selectTask,
            text, updateDescription,

            tasks,
        } = this.props;
        const { validationErrors, validationWarnings, status } = this.state;
        return(
            <div className="dashboard">
                <Modal
                    visible={deletingTask}
                    title="Confirm delete"
                    onOk={() => {
                        toggleTaskDelete();
                        deleteTask({ id: deletingTask });
                    }}
                    onCancel={toggleTaskDelete}
                    >
                    Are you sure you want to delete task at {(tasks.find(task => task.id === deletingTask) || {}).address}?
                </Modal>
                <Map
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `calc(100vh - 80px)`}} />}
                  mapElement={<div style={{ height: `100%` }} />}></Map>
                <Tasks tasks={tasks} newTaskActive={creatingTask}
                    addNewTask={toggleDrawer}
                    deleteTask={toggleTaskDelete}
                    editTask={startEditTask}></Tasks>
                <Drawer
                    active={creatingTask}
                    address={address}
                    editing={editing}
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

export default connect(({ Dashboard: { creatingTask, deletingTask }, NewTask: { activeType, activeTask, text, editing }, Map: { address }, History: { tasks } }) => {
    return {
        creatingTask, deletingTask,
        address,
        activeType, activeTask, text, editing,
        tasks: tasks.slice(-3).reverse() };
}, { ...dashboardActions, ...newTaskActions, ...historyActions, createTask, deleteTask, editTask, startEditTask } )(Dashboard)
