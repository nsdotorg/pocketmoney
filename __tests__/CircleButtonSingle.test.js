import { render, fireEvent } from "@testing-library/react";
import CircleButtonSingle from "@/components/CircleButtonSingle";

const mockFn = jest.fn();
describe("CircleButtonSingle Component", () => {
  // Checks whether the CircleButtonSingle component renders correctly
  it("renders correctly", () => {
    const { getByText } = render(
      <CircleButtonSingle item={10} age={10} handler={mockFn} />
    );
    expect(getByText("10")).toBeInTheDocument();
  });

  // Checks whether the correct styles are applied based on passed props
  it("applies correct styles based on props", () => {
    const { getByText } = render(
      <CircleButtonSingle item={10} age={10} handler={mockFn} />
    );
    const button = getByText("10");

    expect(button).toHaveClass("bg-black text-white");
  });

  // Checks whether the handler is called correctly on click
  it("calls handler function on button click", () => {
    const { getByText } = render(
      <CircleButtonSingle item={10} age={10} handler={mockFn} />
    );
    const button = getByText("10");

    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
