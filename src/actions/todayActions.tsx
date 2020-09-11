import {
  ADD_GOAL,
  LOAD_GOALS,
  Goal,
  Goals,
  GoalTypes,
  ADD_NEW_GOAL,
  ACCOMPLISHED_GOAL,
} from "../store/types";

export function addGoal(goal: Goal): GoalTypes {
  return {
    type: ADD_GOAL,
    payload: goal,
  };
}

export function addNewGoal(): GoalTypes {
  return {
    type: ADD_NEW_GOAL,
  };
}

export function loadGoals(goals: Goals): GoalTypes {
  return {
    type: LOAD_GOALS,
    payload: goals,
  };
}

export function accomplishGoal(goal: Goal): GoalTypes {
  return {
    type: ACCOMPLISHED_GOAL,
    payload: goal,
  };
}
