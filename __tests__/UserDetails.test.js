import { render } from "@testing-library/react";
import UserDetails from "@/components/UserDetails";

describe("UserDetails Component", () => {
  // Checks if UserDetails component is rendered correctly
  it("renders correctly", () => {
    const { container } = render(<UserDetails />);
    expect(container.firstChild).toBeInTheDocument();
  });

  // Checks if greeting message is present on the screen
  it("displays user greeting correctly", () => {
    const { getByText } = render(<UserDetails />);
    expect(getByText("Hi Krish")).toBeInTheDocument();
    expect(getByText("Good Morning")).toBeInTheDocument();
  });

  // Checks whether the points and badges count are correct
  it("displays correct points and badges count", () => {
    const { getByText } = render(<UserDetails />);
    expect(getByText("255")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
  });

  // Checks whether user image is rendered correctly
  it("renders user image correctly", () => {
    const { getByAltText } = render(<UserDetails />);
    const userImage = getByAltText("user image");
    expect(userImage).toBeInTheDocument();
  });
});
