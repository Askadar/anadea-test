import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from './redux';
import Tasks from './Tasks';
import Drawer from './Drawer';

import './index.css';

const Map = () =>
<div style={{height: '100%', display: 'block', width: '100vw', background: 'grey'}}>map</div>

const NewTaskMenu = ({handlers}) =>
<div>
New Task commence
</div>

class Dashboard extends Component {
    render() {
        const { basicData } = this.props;
        return(
            <div className="dashboard">
                <Map></Map>
                <Tasks tasks={[{date: 'Now', label: 'Just plumb my bumb', id: 25}]}></Tasks>
                <Drawer/>
            </div>
        );
    }
}

export default connect(({ Dashboard: { basicData } }) => {
    return { basicData };
}, actions)(Dashboard)
