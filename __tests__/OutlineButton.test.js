import { render, fireEvent } from "@testing-library/react";
import OutlineButton from "@/components/OutlineButton";

const mockFn = jest.fn();

describe("OutlineButton Component", () => {
  // Checks whether the OutlineButton component renders correctly
  it("renders button correctly with provided text", () => {
    const { getByText } = render(<OutlineButton text="Click Me" />);
    expect(getByText("Click Me")).toBeInTheDocument();
  });

  // Checks whether the both custom and default classes are applied correctly
  it("applies provided classnames along with default classes", () => {
    const { container } = render(
      <OutlineButton text="Click Me" classnames="custom-class" />
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("border", "border-red-500", "custom-class");
  });

  // Checks whether the correct handler is called on button click
  it("calls provided handler function on button click", () => {
    const { getByText } = render(
      <OutlineButton text="Click Me" handler={mockFn} />
    );
    const button = getByText("Click Me");
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
