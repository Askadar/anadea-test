import moment from 'moment';

import { taskCreated } from '../commonActions';


export const types = {

}

export const actions = {

}

const initialState = {
    tasks: []
}

const History = (state = initialState, action) => {
  switch (action.type) {
    case taskCreated:
        const { type, ...actionData } = action;
        // TODO plug in reselect-y and proper uuid creator
        let newTasks = state.tasks.concat({ ...actionData, id: Math.random() * Math.random(), dateCreated: moment(), date: moment().add(1, 'day').hour(11) })
        let newState = { ...state, tasks: newTasks};
        return newState;
    return initialState
    default:
      return state
  }
}

export default History
