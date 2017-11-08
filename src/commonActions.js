export const taskCreated = '@Common:Task-created';

export const createTask = (fields) => (dispatch => console.log(fields) || dispatch({ type: taskCreated, ...fields}));
