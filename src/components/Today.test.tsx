import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../store";
import { Today } from "./Today";

afterEach(cleanup);

const App: React.FC = () => (
  <Provider store={store}>
    <Today />
  </Provider>
);

function addGoals(goals: string[]) {
  goals.forEach((goal: string) => {
    userEvent.type(screen.getByRole("textbox"), goal);
    expect(screen.getByRole("textbox")).toHaveValue(goal);
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("textbox")).toBeEmptyDOMElement();
  });
}

describe("When the page initially loaded", () => {
  it('renders the "My Dashboard" title on the main page', () => {
    const { queryByText } = render(<App />);
    expect(queryByText(/My Dashboard/i)).toBeInTheDocument();
  });

  it("renders the form where goal can be added", () => {
    const { container, getByPlaceholderText, getByRole } = render(<App />);
    expect(container.querySelector("#goal-form")).toBeVisible();
    expect(getByPlaceholderText("Enter your task")).toBeVisible();
    expect(getByRole("button")).toBeVisible();
  });

  it("renders all the goals in a section", () => {
    const { container } = render(<App />);
    expect(container.querySelector("#all-goals")).toBeVisible();
  });
});

describe("When a user interacts with the form", () => {
  // https://github.com/testing-library/user-event#typeelement-text-options
  it("fills the text box when user provides the input", () => {
    render(<App />);

    const goal: string = "Finish the test";
    userEvent.type(screen.getByRole("textbox"), goal);
    expect(screen.getByRole("textbox")).toHaveValue(goal);
  });

  it('adds a goal when a user clicks on the "ADD" button', () => {
    render(<App />);
    const goal: string = "first task";
    userEvent.type(screen.getByRole("textbox"), goal);
    expect(screen.getByRole("textbox")).toHaveValue(goal);

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("textbox")).toBeEmptyDOMElement();
  });

  it("lists down all the goals", () => {
    const { container } = render(<App />);
    const goals: string[] = ["goal 1", "goal 2", "goal 3"];
    addGoals(goals);

    let querySelector = container.querySelector("#all-goals");
    expect(querySelector).not.toBeNull();

    /**
     * todo (h2): The following assertions are happening since the redux store
     * is not reset between tests, that's why the previous "first task"
     * appears in this test as well.
     * To solve this, we need a way as described in
     * https://testing-library.com/docs/example-react-redux
     */

    // + 1 from previous add of goal
    expect(querySelector!.childNodes.length).toBe(goals.length + 1);

    // check goals from this test starting from first node
    const expectedGoals = ["first task", ...goals];
    for (let i = 0; i < querySelector!.childNodes.length; i++) {
      expect(querySelector!.childNodes.item(i).lastChild!.textContent).toBe(
        expectedGoals[i]
      );
    }
  });
});
