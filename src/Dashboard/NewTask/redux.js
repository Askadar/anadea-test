import { taskCreated, taskForEditLoaded, taskEdited } from '../../commonActions';

export const types = {
    selectType: '@NewTask:Select-type',
    selectTask: '@NewTask:Select-task',
    updateDescription: '@NewTask:Update-description',
}

export const actions = {
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
    activeType: null,
    activeTask: null,
    text: '',
    editing: null
};
const NewTask = (state = initialState, action) => {
  switch (action.type) {
    case taskForEditLoaded:
        const { taskType: activeType, task: activeTask, description: text, id} = action
        return state.editing ? initialState : { ...state, activeType, activeTask, text, editing: id };
    case taskEdited:
    case taskCreated:
        return initialState;
    case types.updateDescription:
        return { ...state, text: action.newText};
    case types.selectTask:
        return { ...state, activeTask: action.selectedTask};
    case types.selectType:
        return { ...state, activeType: action.selectedType};
    default:
      return state
  }
}

export default NewTask
