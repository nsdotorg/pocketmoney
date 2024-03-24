import { render } from "@testing-library/react";
import DummyButton from "@/components/DummyButton";

describe("DummyButton Component", () => {
  // Checks whether the DummyButton component renders correctly
  it("renders correctly with default props", () => {
    const { getByText } = render(<DummyButton text="Click me" />);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  // Checks whether the custom classes are applied correctly
  it("applies custom classes correctly", () => {
    const { container } = render(
      <DummyButton text="Custom Button" classnames="custom-class" />
    );
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveClass("custom-class");
    expect(buttonElement).toHaveClass("bg-[#ed002b]");
  });

  // Checks whether the default styles are applied correctly
  it("applies default styles correctly", () => {
    const { container } = render(<DummyButton text="Default Button" />);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveClass("bg-[#ed002b]");
    expect(buttonElement).toHaveClass("text-white");
  });

  // Checks whether the component renders without text prop
  it("renders without crashing when text prop is not provided", () => {
    const { container } = render(<DummyButton />);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
