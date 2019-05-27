import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createLogger} from "redux-logger";
import fetchMiddleware from "../middleware/fetchMiddleware";
import rootReducer from "./rootReducer";

export default function configureStore(preloadedState: any) {
  const loggerMiddleware = createLogger();
  const middlewares = [loggerMiddleware, fetchMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
