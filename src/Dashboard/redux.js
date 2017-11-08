import { taskCreated } from '../commonActions';

export const types = {
    toggleDrawer: '@Dashboard:Toggle-drawer',
}

export const actions = {
    addNewTask: () => (dispatch => dispatch({
        type: types.toggleDrawer
    })),
}

const initialState = {
    creatingTask: false,
};
const Dashboard = (state = initialState, action) => {
  switch (action.type) {
    case taskCreated:
        return { ...state, creatingTask: false };
    case types.toggleDrawer:
        return { ...state, creatingTask: !state.creatingTask};
    default:
      return state
  }
}

export default Dashboard
