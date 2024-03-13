import * as actionType from "./actionsType";
export const addtask = (task) => {
  return { type: actionType.ADD_TASK, payload: { task: task } };
};

export const removetask = (id) => {
  return { type: actionType.REMOVE_TASK, payload: { id: id } };
};

export const completetask = (id) => {
  return { type: actionType.COMPLETED_TASK, payload: { id: id } };
};
