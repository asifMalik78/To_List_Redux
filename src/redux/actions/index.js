export const addTodo = (data) => {
  return {
    type: "toDo/addTask",
    payload: data,
  };
};

export const deleteTodo = (data) => {
  return {
    type: "toDo/deleteTask",
    payload: data,
  };
};


export const editTodo = (data) => {
  return {
    type: "toDo/editTask",
    payload: data,
  };
};


export const checkTodo = (data) => {
  return {
    type: "toDo/checkTask",
    payload: data,
  };
};


export const filterAll = (data) => {
  return {
    type: "toDo/filterAll",
    payload: data,
  };
};
export const filterActive = (data) => {
  return {
    type: "toDo/filterActive",
    payload: data,
  };
};
export const filterCompleted = (data) => {
  return {
    type: "toDo/filterCompleted",
    payload: data,
  };
};

