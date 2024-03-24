import { render, fireEvent } from "@testing-library/react";
import InputBox from "@/components/InputBox";

const mockHandler = jest.fn();
describe("InputBox component", () => {
  // Checks whether the InputBox component renders correctly
  it("renders the inputbox component", () => {
    render(<InputBox />);
  });

  // Checks whether the InputBox component renders with placeholder text
  it("renders the inputbox with placeholder text", () => {
    const { getByPlaceholderText } = render(
      <InputBox placeholder="Enter text" />
    );
    expect(getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  // Checks whether the handler function is called when the value changes
  it("calls the handler function on change", () => {
    const { getByPlaceholderText } = render(
      <InputBox placeholder="Enter text" handler={mockHandler} />
    );
    fireEvent.change(getByPlaceholderText("Enter text"), {
      target: { value: "Test input" },
    });
    expect(mockHandler).toHaveBeenCalled();
  });

  // Checks whether InputBox displays the correct value
  it("displays correct value", () => {
    const { getByPlaceholderText } = render(
      <InputBox placeholder="Enter text" value="Test value" />
    );
    expect(getByPlaceholderText("Enter text")).toHaveValue("Test value");
  });
});
