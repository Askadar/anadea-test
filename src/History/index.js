import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListedTask } from '../Dashboard/Tasks';

import './index.css';

class History extends Component {
    render() {
        const { tasks } = this.props;
        return(
            <div className="history">
                {tasks.reverse().map(task => (
                    <ListedTask {...task} key={task.id}></ListedTask>
                ))}
            </div>
        );
    }
}
export default connect(({ History }) => ({ ...History }))(History);
