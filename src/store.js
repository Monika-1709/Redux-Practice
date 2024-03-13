// import { createStore } from "redux";
import reducers from "./reducers";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(reducers, devToolsEnhancer({ trace: true }));

const store = configureStore({ reducers });
export default store;
