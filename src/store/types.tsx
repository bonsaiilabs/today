export interface Goal {
  text: string;
}

export interface Goals {
  all: Goal[];
}

export const ADD_GOAL = "ADD_GOAL";
export const LOAD_GOALS = "LOAD_GOALS";

export interface AddGoalAction {
  type: typeof ADD_GOAL;
  payload: Goal;
}

export interface LoadGoalsAction {
  type: typeof LOAD_GOALS;
  payload: Goals;
}

export type GoalTypes = AddGoalAction | LoadGoalsAction;

export type Header = "Today" | "Notes";
export const TODAY: Header = "Today";
export const NOTES: Header = "Notes";
export const Headers: Header[] = [TODAY, NOTES];

export interface HeaderChangeAction {
  type: Header;
}
