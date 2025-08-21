import { render, screen } from "@testing-library/react";
import Profile from "../components/Profile";

describe("Profile Component", () => {
  test("renders Profile Page heading", () => {
    render(<Profile />);
    const heading = screen.getByText(/profile page/i);
    expect(heading).toBeInTheDocument();
  });
});
