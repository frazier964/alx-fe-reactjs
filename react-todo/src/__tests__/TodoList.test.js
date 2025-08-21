import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders without crashing", () => {
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

  test("marks a todo item as completed", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new task/i);
    const button = screen.getByRole("button", { name: /add/i });

    await userEvent.type(input, "Write Tests");
    await userEvent.click(button);

    const todoItem = screen.getByText(/write tests/i);
    await userEvent.click(todoItem);

    expect(todoItem).toHaveClass("completed");
  });
});
