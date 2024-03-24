import { render, fireEvent } from "@testing-library/react";
import SolidButton from "@/components/SolidButton";

const mockFn = jest.fn();
describe("SolidButton Component", () => {
  // Checks if SolidButton component is rendered correctly
  it("renders correctly", () => {
    const { getByText } = render(<SolidButton text="Click me" />);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  // Checks whether the handler is called on button click
  it("calls handler function on button click", () => {
    const { getByText } = render(
      <SolidButton text="Click me" handler={mockFn} />
    );
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
  });

  // Checks whether the custom classes are applied correctly
  it("applies custom classnames correctly", () => {
    const { container } = render(
      <SolidButton text="Click me" classnames="custom-class" />
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("custom-class");
  });

  // Checks whether the default styles are applied on the button
  it("applies default styles correctly", () => {
    const { container } = render(<SolidButton text="Click me" />);
    const button = container.querySelector("button");
    expect(button).toHaveClass("bg-[#ed002b]");
    expect(button).toHaveClass("text-white");
  });
});
