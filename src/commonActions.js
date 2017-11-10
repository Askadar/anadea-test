export const taskCreated = '@Common:Task-created';
export const taskDeleted = '@Common:Task-deleted';
export const taskEdited = '@Common:Task-edited';
export const taskForEditLoaded = '@Common:Task-forEdit-loaded';

export const createTask = (fields) => (dispatch => dispatch({ type: taskCreated, ...fields}));
export const deleteTask = (fields) => (dispatch => dispatch({ type: taskDeleted, ...fields}));
export const startEditTask = (fields) => (dispatch => dispatch({ type: taskForEditLoaded, ...fields}));
export const editTask = (fields) => (dispatch => dispatch({ type: taskEdited, ...fields}));
