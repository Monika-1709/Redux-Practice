import * as actionType from "./actionsType";
import { createAction } from "@reduxjs/toolkit";

// Redux Toolkit

export const addtask = createAction("ADD_TASK"); // type property
// console.log(addtask("task 1")); //payload property

export const removetask = createAction("REMOVE_TASK"); // type property
// console.log(addtask("task 1"));

export const completetask = createAction("COMPLETED_TASK"); // type property
// console.log(addtask("task 1"));

// REDUX ONLY
// export const addtask = (task) => {
//   return { type: actionType.ADD_TASK, payload: { task: task } };
// };

// export const removetask = (id) => {
//   return { type: actionType.REMOVE_TASK, payload: { id: id } };
// };

// export const completetask = (id) => {
//   return { type: actionType.COMPLETED_TASK, payload: { id: id } };
// };
