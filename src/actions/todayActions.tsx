import { ADD_GOAL, LOAD_GOALS, Goal, Goals, GoalTypes } from "../store/types";

export function addGoal(goal: Goal): GoalTypes {
  return {
    type: ADD_GOAL,
    payload: goal,
  };
}

export function loadGoals(goals: Goals): GoalTypes {
  return {
    type: LOAD_GOALS,
    payload: goals,
  };
}
