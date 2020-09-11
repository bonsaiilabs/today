import { ADD_GOAL, LOAD_GOALS, Goal, Goals } from "../store/types";
import { addGoal, loadGoals } from "./todayActions";

describe("Goal Actions", () => {
  it("should create an action to add a goal", () => {
    const goal: Goal = { text: "Create the action" };
    const expectedAction = { type: ADD_GOAL, payload: goal };
    expect(addGoal(goal)).toEqual(expectedAction);
  });

  it("should create an action to load goals", () => {
    const goal: Goal = { text: "Load the goals" };
    const goals: Goals = { all: [goal] };
    const expectedAction = { type: LOAD_GOALS, payload: goals };
    expect(loadGoals(goals)).toEqual(expectedAction);
  });
});
