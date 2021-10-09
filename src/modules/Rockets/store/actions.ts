import { Rocket } from "./interfaces";

export const GET_ROCKET = "GET_ROCKET";
export const GET_ROCKETS = "GET_ROCKETS";

export const getRockets = (payload: Rocket[]) => ({ type: GET_ROCKETS, payload });
export const getRocket = (payload: Rocket) => ({ type: GET_ROCKET, payload });
