import logger from "redux-logger";
import { Provider } from "react-redux";
import { BaseProps } from "./common/interfaces";
import { rocketsReducer } from "./modules/Rockets/store/reducer";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ rocketsModule: rocketsReducer });

export const store = createStore(reducers, composeEnhancers(applyMiddleware(logger)));
export type RootState = ReturnType<typeof store.getState>;
export const StoreProvider = ({ children }: BaseProps) => <Provider store={store}>{children}</Provider>;
