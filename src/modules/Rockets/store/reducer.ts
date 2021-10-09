import { GET_ROCKET, GET_ROCKETS } from "./actions";
import { AnyAction } from "redux";
import { RocketsState } from "./interfaces";

const initialState: RocketsState = {
  rockets: [],
  activeRocket: null,
};

export const rocketsReducer = (state = initialState, { type, payload }: AnyAction) => {
  const reducers = new Map<string, RocketsState>();

  reducers.set(GET_ROCKETS, { ...state, rockets: payload });
  reducers.set(GET_ROCKET, { ...state, activeRocket: payload });

  return reducers.get(type) || state;
};
