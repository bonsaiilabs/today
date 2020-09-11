import { ADD_GOAL, LOAD_GOALS, Goals, GoalTypes } from "../store/types";

export const initialState: Goals = { all: [] };

export default (state = initialState, action: GoalTypes) => {
  switch (action.type) {
    case ADD_GOAL:
      return { all: [...state.all, action.payload] };
    case LOAD_GOALS:
      return { all: action.payload.all || [] };
    default:
      return state;
  }
};
