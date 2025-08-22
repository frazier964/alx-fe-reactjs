import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the Todo List heading", () => {
    render(<TodoList />);
    expect(screen.getByText(/todo list/i)).toBeInTheDocument();
  });

  test("adds a new todo item", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new task/i);
    const button = screen.getByRole("button", { name: /add/i });

    await userEvent.type(input, "Learn React Testing");
    await userEvent.click(button);

    expect(screen.getByText(/learn react testing/i)).toBeInTheDocument();
  });

  test("toggles a todo item as completed", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new task/i);
    const button = screen.getByRole("button", { name: /add/i });

    await userEvent.type(input, "Write Tests");
    await userEvent.click(button);

    const todoItem = screen.getByText(/write tests/i);

    // click once → completed
    await userEvent.click(todoItem);
    expect(todoItem).toHaveClass("completed");

    // click again → uncompleted
    await userEvent.click(todoItem);
    expect(todoItem).not.toHaveClass("completed");
  });

  test("deletes a todo item", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new task/i);
    const button = screen.getByRole("button", { name: /add/i });

    await userEvent.type(input, "Task to Delete");
    await userEvent.click(button);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    await userEvent.click(deleteButton);

    expect(screen.queryByText(/task to delete/i)).not.toBeInTheDocument();
  });
});
