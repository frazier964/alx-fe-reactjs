import { render, screen } from "@testing-library/react";
import Profile from "../components/Profile";

test("renders profile heading", () => {
  render(<Profile />);
  const heading = screen.getByText(/profile/i);
  expect(heading).toBeInTheDocument();
});
