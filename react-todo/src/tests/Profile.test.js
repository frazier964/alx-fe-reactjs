import { render, screen } from "@testing-library/react";
import Profile from "../components/Profile";

test("renders Profile component with name", () => {
  render(<Profile name="Hillary" />);
  expect(screen.getByText(/Profile/i)).toBeInTheDocument();
  expect(screen.getByText(/Hillary/i)).toBeInTheDocument();
});
