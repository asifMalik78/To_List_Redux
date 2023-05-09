const initialState = {
  tasks: [],
  filtered: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toDo/addTask":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        filtered: [...state.tasks, action.payload],
      };
    case "toDo/deleteTask":

      return {
        ...state,
        tasks: state.tasks.filter((curr) => curr.id !== action.payload.id),
        filtered: state.filtered.filter((curr) => curr.id !== action.payload.id),
      };

    case "toDo/checkTask":
      return {
        ...state,
        tasks: state.tasks.map((curr) => {
          if (curr.id === action.payload.id) {
            return {
              ...curr,
              isChecked: action.payload.isChecked,
            };
          } else {
            return curr;
          }
        }),
        filtered: state.filtered.map((curr) => {
          if (curr.id === action.payload.id) {
            return {
              ...curr,
              isChecked: action.payload.isChecked,
            };
          } else {
            return curr;
          }
        }),
      };

    case "toDo/editTask":
      return {
        ...state,
        tasks: state.tasks.map((curr) => {
          if (curr.id === action.payload.id) {
            return {
              ...curr,
              title: action.payload.title,
            };
          } else {
            return curr;
          }
        }),

        filtered: state.filtered.map((curr) => {
          if (curr.id === action.payload.id) {
            return {
              ...curr,
              title: action.payload.title,
            };
          } else {
            return curr;
          }
        }),
      };

    case "toDo/filterAll":
      return {
        ...state,
        filtered: [...state.tasks],
      };

    case "toDo/filterActive":
      return {
        ...state,
        filtered: state.tasks.filter((curr) => curr.isChecked === false),
      };

    case "toDo/filterCompleted":
      return {
        ...state,
        filtered: state.tasks.filter((curr) => curr.isChecked === true),
      };
    default:
      return state;
  }
};
