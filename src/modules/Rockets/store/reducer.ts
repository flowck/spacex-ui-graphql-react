import { AnyAction } from "redux";
import { RocketsState } from "./interfaces";

const initialState: RocketsState = {
  rockets: [],
};

export const rocketsReducer = (state = initialState, action: AnyAction) => {
  const reducers = new Map<string, RocketsState>();
  return reducers.get(action.type) || state;
};
