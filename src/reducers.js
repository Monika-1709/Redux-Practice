//REDUX ONLY

// import * as actionType from "./actionsType";

// let id = 0;

// function reducers(state = [], action) {
//   switch (action.type) {
//     case actionType.ADD_TASK:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//           completed: false,
//         },
//       ];
//     case actionType.REMOVE_TASK:
//       return state.filter((task) => task.id !== action.payload.id);
//     case actionType.COMPLETED_TASK:
//       return state.map((task) =>
//         task.id === action.payload.id
//           ? {
//               ...task,
//               completed: true,
//             }
//           : task
//       );
//     default:
//       return state;
//   }
// }
// export default reducers;

// REDUX TOOLKIT
// import { addtask, completetask, removetask } from "./action";
import { createReducer, createSlice } from "@reduxjs/toolkit";

const taskslice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    //action :function
    addtask: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    },
    removetask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.splice(index, 1);
    },
    completetask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = true;
    },
  },
});
console.log(taskslice);
export const { addtask, removetask, completetask } = taskslice.actions;
export default taskslice.reducer;

// let id = 0;

// createReducer replaced by createSlice

// export default createReducer([], {
//   [addtask.type]: (state, action) => {
//     state.push({
//       id: ++id,
//       task: action.payload.task,
//       completed: false,
//     });
//   },
//   [removetask.type]: (state, action) => {
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     state.splice(index, 1);
//   },
//   [completetask.type]: (state, action) => {
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     state[index].completed = true;
//   },
// });

// function reducers(state = [], action) {
//   switch (action.type) {
//     case addtask.type:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//           completed: false,
//         },
//       ];
//     case removetask.type:
//       return state.filter((task) => task.id !== action.payload.id);
//     case completetask.type:
//       return state.map((task) =>
//         task.id === action.payload.id
//           ? {
//               ...task,
//               completed: true,
//             }
//           : task
//       );
//     default:
//       return state;
//   }
// }
// export default reducers;
