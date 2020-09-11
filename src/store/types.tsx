export interface Goal {
  text: string;
}

export interface Goals {
  all: Goal[];
  addMore: false;
}

export const ADD_GOAL = "ADD_GOAL";
export const ADD_NEW_GOAL = "ADD_NEW_GOAL";
export const LOAD_GOALS = "LOAD_GOALS";

export interface AddGoalAction {
  type: typeof ADD_GOAL;
  payload: Goal;
}

export interface AddNewGoalAction {
  type: typeof ADD_NEW_GOAL;
}

export interface LoadGoalsAction {
  type: typeof LOAD_GOALS;
  payload: Goals;
}

export type GoalTypes = AddGoalAction | AddNewGoalAction | LoadGoalsAction;

export type Header = "Today" | "Notes";
export const TODAY: Header = "Today";
export const NOTES: Header = "Notes";
export const Headers: Header[] = [TODAY, NOTES];

export interface HeaderChangeAction {
  type: Header;
}
