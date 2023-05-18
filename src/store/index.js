import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import produceReducer from "./produce";

export const rootReducer = combineReducers({
  produce: produceReducer 
});

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
}

let enhancer;

if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

export default configureStore;