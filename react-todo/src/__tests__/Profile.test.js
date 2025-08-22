import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "../components/Profile";

describe("Profile Component", () => {
  test("renders the profile name", () => {
    render(<Profile name="Hillary" />);
    expect(screen.getByText(/hillary/i)).toBeInTheDocument();
  });

  test("renders the profile description when provided", () => {
    render(<Profile name="Hillary" description="Software Engineer" />);
    expect(screen.getByText(/software engineer/i)).toBeInTheDocument();
  });
});
