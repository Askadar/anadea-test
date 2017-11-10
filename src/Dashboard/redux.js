import { taskCreated, taskDeleted, taskEdited, taskForEditLoaded } from '../commonActions';

export const types = {
    toggleDrawer: '@Dashboard:Toggle-drawer',
    toggleTaskDelete: '@Dashboard:Toggle-task-delete',
}

export const actions = {
    toggleDrawer: () => (dispatch => dispatch({
        type: types.toggleDrawer
    })),
    toggleTaskDelete: (id) => (dispatch => dispatch({type: types.toggleTaskDelete, id}))
}

const initialState = {
    creatingTask: false,
    deletingTask: false,
};
const Dashboard = (state = initialState, action) => {
  switch (action.type) {
    case taskEdited:
    case taskCreated:
    case taskDeleted:
        return { ...state, deletingTask: false, creatingTask: false };
    case types.toggleTaskDelete:
        return { ...state, deletingTask: action.id ? action.id : !state.deletingTask };
    case taskForEditLoaded:
    case types.toggleDrawer:
        return { ...state, creatingTask: !state.creatingTask };
    default:
      return state
  }
}

export default Dashboard
