import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { ToDoApp } from "./ToDoApp";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "./store";

afterEach(cleanup);

const App: React.FC = () => (
  <Provider store={store}>
    <ToDoApp />
  </Provider>
);

describe("When the page initially loaded", () => {
  it('renders the "My Dashboard" title on the main page', () => {
    const { queryByText } = render(<App />);
    expect(queryByText(/My Dashboard/i)).toBeInTheDocument();
  });

  it("renders the form where todo can be added", () => {
    const { container, getByPlaceholderText, getByRole } = render(<App />);
    expect(container.querySelector("#todo-form")).toBeVisible();
    expect(getByPlaceholderText("Enter your task")).toBeVisible();
    expect(getByRole("button")).toBeVisible();
  });

  it("renders all the todos in a section", () => {
    const { container } = render(<App />);
    expect(container.querySelector("#all-todos")).toBeVisible();
  });
});

describe("When a user interacts with the form", () => {
  // https://github.com/testing-library/user-event#typeelement-text-options
  it("fills the text box when user provides the input", () => {
    render(<App />);

    const todo: string = "Finish the test";
    userEvent.type(screen.getByRole("textbox"), todo);
    expect(screen.getByRole("textbox")).toHaveValue(todo);
  });

  it('adds a todo when a user clicks on the "ADD" button', () => {
    render(<App />);
    const todo: string = "first task";
    userEvent.type(screen.getByRole("textbox"), todo);
    expect(screen.getByRole("textbox")).toHaveValue(todo);

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("textbox")).toBeEmptyDOMElement();
  });

  it("lists down all the todos", () => {
    const { container } = render(<App />);
    const todos: string[] = ["todo 1", "todo 2", "todo 3"];
    todos.forEach((todo: string) => {
      userEvent.type(screen.getByRole("textbox"), todo);
      expect(screen.getByRole("textbox")).toHaveValue(todo);
      userEvent.click(screen.getByRole("button"));
      expect(screen.getByRole("textbox")).toBeEmptyDOMElement();
    });

    let querySelector = container.querySelector("#all-todos");
    expect(querySelector).not.toBeNull();

    /**
     * ToDo: The following assertions are happening since the redux store
     * is not reset between tests, that's why the previous "first task"
     * appears in this test as well.
     * To solve this, we need a way as described in
     * https://testing-library.com/docs/example-react-redux
     */

    // + 1 from previous add of todo
    expect(querySelector!.childNodes.length).toBe(todos.length + 1);

    // check todos from this test starting from first node
    const expectedToDos = ["first task", ...todos];
    for (let i = 0; i < querySelector!.childNodes.length; i++) {
      expect(querySelector!.childNodes.item(i).textContent).toBe(
        expectedToDos[i]
      );
    }
  });
});
