import reducer, { initialState } from "./todayReducer";
import {
  ADD_GOAL,
  AddGoalAction,
  LOAD_GOALS,
  LoadGoalsAction,
  Goal,
  Goals,
  GoalTypes,
} from "../store/types";

describe("todayReducer", () => {
  it("should return the initial state for unknown action", () => {
    expect(reducer(undefined, {} as GoalTypes)).toEqual(initialState);
  });

  it("should return a new state with goal added from action passed", () => {
    const goal: Goal = { text: "Add me" };
    const action: AddGoalAction = { type: ADD_GOAL, payload: goal };
    const newState = reducer(undefined, action);

    expect(newState.all).toHaveLength(1);
    expect(newState.all[0]).toEqual(goal);
  });

  it("should load goals from the action", () => {
    const goal1: Goal = { text: "Coming from IndexedDb" };
    const goal2: Goal = { text: "Make coffee" };
    const goals: Goals = { all: [goal1, goal2] };
    const action: LoadGoalsAction = { type: LOAD_GOALS, payload: goals };
    const newState = reducer(undefined, action);

    expect(newState.all).toHaveLength(2);
    expect(newState.all[0]).toEqual(goal1);
    expect(newState.all[1]).toEqual(goal2);
  });
});
