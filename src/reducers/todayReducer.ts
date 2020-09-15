import {
  ACCOMPLISHED_GOAL,
  ADD_GOAL,
  ADD_NEW_GOAL,
  DELETE_GOAL,
  Goals,
  GoalTypes,
  LOAD_GOALS,
} from "../store/types";

export const MAX_GOALS_ALLOWED = 3;
export const initialState: Goals = { all: [], addMore: false };

export default (state = initialState, action: GoalTypes) => {
  switch (action.type) {
    case ADD_GOAL:
      return { all: [...state.all, action.payload], addMore: false };
    case LOAD_GOALS:
      return { all: action.payload.all || [] };
    case ADD_NEW_GOAL: {
      return { all: state.all, addMore: true };
    }
    case DELETE_GOAL:
    case ACCOMPLISHED_GOAL: {
      const remainingGoals = state.all.filter(
        (goal) => goal.text !== action.payload.text
      );
      return Object.assign({}, { all: remainingGoals });
    }
    default:
      return state;
  }
};
