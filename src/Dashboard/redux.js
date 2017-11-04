export const types = {
    toggleDrawer: '@Dashboard:Toggle-drawer',
    selectType: '@Dashboard:Select-type',
    selectTask: '@Dashboard:Select-task',
    updateDescription: '@Dashboard:Update-description',
}

export const actions = {
    addNewTask: () => (dispatch => dispatch({
        type: types.toggleDrawer
    })),
    selectType: (selectedType) => (dispatch => dispatch({
        type: types.selectType, selectedType
    })),
    selectTask: (selectedTask) => (dispatch => dispatch({
        type: types.selectTask, selectedTask
    })),
    updateDescription: (newText) => (dispatch => dispatch({
        type: types.updateDescription, newText
    })),
}

const initialState = {
    creatingTask: false,
    activeType: null,
    activeTask: null,
    text: ''
};
const History = (state = initialState, action) => {
  switch (action.type) {
    case types.updateDescription:
        return { ...state, text: action.newText};
    case types.selectTask:
        return { ...state, activeTask: action.selectedTask};
    case types.selectType:
        return { ...state, activeType: action.selectedType};
    case types.toggleDrawer:
        return { ...state, creatingTask: !state.creatingTask};
    default:
      return state
  }
}

export default History
