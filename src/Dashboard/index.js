import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from './redux';
import Tasks from './Tasks';
import Drawer from './Drawer';
import Map from '../Map';

import './index.css';

const NewTaskMenu = ({handlers}) =>
<div>
New Task commence
</div>

class Dashboard extends Component {
    render() {
        const {
            creatingTask, addNewTask,
            address,
            activeType, selectType,
            activeTask, selectTask,
            text, updateDescription,
        } = this.props;
        return(
            <div className="dashboard">
                <Map
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `calc(100vh - 80px)`, minHeight: '600px'}} />}
                  mapElement={<div style={{ height: `100%` }} />}></Map>
                <Tasks tasks={[{date: 'Now', label: 'Just plumb my bumb', id: 25}]} newTaskActive={creatingTask} addNewTask={addNewTask}></Tasks>
                <Drawer
                    active={creatingTask}
                    address={address}
                    type={{selectType, activeType}}
                    task={{selectTask, activeTask}}
                    description={{text, updateDescription}}
                />
            </div>
        );
    }
}

export default connect(({ Dashboard: { creatingTask, activeType, activeTask, text }, Map: { address } }) => {
    return { creatingTask, address, activeType, activeTask, text };
}, actions)(Dashboard)
