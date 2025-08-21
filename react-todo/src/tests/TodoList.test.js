import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders todo list component", () => {
  render(<TodoList todos={[]} />);
  const element = screen.getByText(/no todos/i);
  expect(element).toBeInTheDocument();
});
