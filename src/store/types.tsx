export interface Goal {
  text: string;
}

export interface Goals {
  all: Goal[];
  addMore: false;
}

export const ADD_GOAL = "ADD_GOAL";
export const DELETE_GOAL = "DELETE_GOAL";
export const ADD_NEW_GOAL = "ADD_NEW_GOAL";
export const LOAD_GOALS = "LOAD_GOALS";
export const ACCOMPLISHED_GOAL = "ACCOMPLISHED_GOAL";

export interface AddGoalAction {
  type: typeof ADD_GOAL;
  payload: Goal;
}

export interface DeleteGoalAction {
  type: typeof DELETE_GOAL;
  payload: Goal;
}

export interface AddNewGoalAction {
  type: typeof ADD_NEW_GOAL;
}

export interface LoadGoalsAction {
  type: typeof LOAD_GOALS;
  payload: Goals;
}

export interface GoalCompletedAction {
  type: typeof ACCOMPLISHED_GOAL;
  payload: Goal;
}

export type GoalTypes =
  | AddGoalAction
  | DeleteGoalAction
  | AddNewGoalAction
  | LoadGoalsAction
  | GoalCompletedAction;

export const PRIORITIES_HEADER: Header = "Priorities";
export const NOTES_HEADER: Header = "Notes";
export type Header = "Priorities" | "Notes";
export const Headers: Header[] = [PRIORITIES_HEADER, NOTES_HEADER];

export interface HeaderChangeAction {
  type: Header;
}
