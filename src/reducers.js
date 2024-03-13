import * as actionType from "./actionsType";

let id = 0;

function reducers(state = [], action) {
  switch (action.type) {
    case actionType.ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];
    case actionType.REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    case actionType.COMPLETED_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              completed: true,
            }
          : task
      );
    default:
      return state;
  }
}
export default reducers;
