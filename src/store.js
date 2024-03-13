// import { createStore } from "redux"; //using redux
import log from "./middleware/log";
import reducers from "./reducers";
// import { devToolsEnhancer } from "redux-devtools-extension";//using redux
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(reducers, devToolsEnhancer({ trace: true }));//using redux

const store = configureStore({ reducer: reducers, middleware: [log] });
export default store;
