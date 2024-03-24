import { render, fireEvent } from "@testing-library/react";
import CircleButtons from "@/components/CircleButtons";

const mockFn = jest.fn();

describe("CircleButtons Component", () => {
  // Checks whether the CircleButtons component renders correctly
  it("renders correctly", () => {
    const { getByText } = render(<CircleButtons age={10} setAge={mockFn} />);
    expect(getByText("9")).toBeInTheDocument();
    expect(getByText("18")).toBeInTheDocument();
  });

  // Checks whether the correct styles get applied when the age button is clicked
  it("applies styles correctly on button click", () => {
    const { getByText } = render(<CircleButtons age={10} setAge={mockFn} />);
    const ageButton = getByText("10");
    fireEvent.click(ageButton);
    expect(ageButton).toHaveStyle("background-color: black");
    expect(ageButton).toHaveStyle("color: white");
  });
});
