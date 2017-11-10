import moment from 'moment';

import {taskCreated, taskDeleted, taskEdited} from '../commonActions';

export const types = {
	deleteTask: '@History:Delete-task'
}

export const actions = {
	confirmDeleteTask: () => (dispatch => dispatch({type: types.deleteTask}))
}

const initialState = {
	tasks: []
}

const History = (state = initialState, action) => {
	const {
        id,
        type,
        ...actionData,
    } = action;
	switch (action.type) {
		case taskEdited:
            let taskToEditIndex = state.tasks.findIndex(task => task.id === id);
            console.log(taskToEditIndex);
            if (taskToEditIndex >= 0)
				return {
					...state,
					tasks: [
						...state.tasks.slice(0, taskToEditIndex),
                        {
                            id,
                            ...actionData,
            				dateEdited: moment(),
            				date: moment().add(1, 'day').hour(11)
                        },
						...state.tasks.slice(taskToEditIndex + 1)
					]
				};
			return state;
		case taskDeleted:
			let taskToDelteIndex = state.tasks.findIndex(task => task.id === id);
			if (taskToDelteIndex >= 0)
				return {
					...state,
					tasks: [
						...state.tasks.slice(0, taskToDelteIndex),
						...state.tasks.slice(taskToDelteIndex + 1)
					]
				};
			return state;
		case taskCreated:
			// TODO plug in reselect-y and proper uuid creator
			let newTasks = state.tasks.concat({
				...actionData,
				id: Math.random() * Math.random(),
				dateCreated: moment(),
				date: moment().add(1, 'day').hour(11)
			})
			let newState = {
				...state,
				tasks: newTasks
			};
			return newState;
		default:
			return state
	}
}

export default History
