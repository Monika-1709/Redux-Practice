// import { compose, pipe } from "lodash/fp";
// let username = "  mona   ";
// const trim = (name) => name.trim();
// const message = (name) => `Hello ${name} good morning`;
// const uppercase = (name) => name.toUpperCase();
// console.log(uppercase(username));
// const newfuc = compose(message, uppercase, trim); // we will call from right to left
// const newfuc1 = pipe(trim, uppercase, message); //we call from left to right
// console.log(newfuc(username));
// // document.write(newfuc(username));
// import { produce } from "immer";
// const obj = {
//   name: "heraly",
//   age: 20,
//   school: {
//     class: "4th",
//     rollno: 8,
//   },
// };
// // const obj1 = Object.assign({}, obj, { name: "mona" });
// const obj1 = produce(obj, (data) => {
//   (data.name = "mona"), (data.school.class = "5th");
// });

// console.log(obj);
// console.log(obj1);
// const arr = [1, 2, 3, 4, 5];
// const updateArr = arr.map((a) => (a === 5 ? 6 : a));
// console.log(arr);
// console.log(updateArr);

import store from "./store";
import { addtask, removetask, completetask } from "./action";

const unsuscribe = store.subscribe(() => {
  console.log("Updated", store.getState());
});
store.dispatch(addtask("task 2"));
store.dispatch(addtask("task 3"));
store.dispatch(removetask(2));
store.dispatch(completetask(1));
