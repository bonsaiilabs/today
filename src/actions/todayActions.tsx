import {
  ACCOMPLISHED_GOAL,
  ADD_GOAL,
  ADD_NEW_GOAL,
  DELETE_GOAL,
  Goal,
  Goals,
  GoalTypes,
  LOAD_GOALS,
} from "../store/types";

export function addGoal(goal: Goal): GoalTypes {
  return {
    type: ADD_GOAL,
    payload: goal,
  };
}

export function deleteGoal(goal: Goal): GoalTypes {
  return {
    type: DELETE_GOAL,
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
