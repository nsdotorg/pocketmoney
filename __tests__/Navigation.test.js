import { render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation";

describe("Navigation Component", () => {
  // Checks whether the Navigation component renders correctly
  it("renders navigation links correctly", () => {
    render(<Navigation />);
    // Checks whether all the navigation links are displayed
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Goals")).toBeInTheDocument();
    expect(screen.getByText("Tasks")).toBeInTheDocument();
    expect(screen.getByText("More")).toBeInTheDocument();
  });

  // Checks whether the icons are being displayed on the screen
  it("renders navigation icons correctly", () => {
    render(<Navigation />);
    expect(screen.getByTestId("home-icon")).toBeInTheDocument();
    expect(screen.getByTestId("goal-icon")).toBeInTheDocument();
    expect(screen.getByTestId("tasks-icon")).toBeInTheDocument();
    expect(screen.getByTestId("more-icon")).toBeInTheDocument();
  });

  // Checks whether the Pay button is present on the page
  it("renders Pay button correctly", () => {
    render(<Navigation />);
    expect(screen.getByText("Pay")).toBeInTheDocument();
  });
});
