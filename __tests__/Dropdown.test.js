import { screen, render, fireEvent } from "@testing-library/react";
import Dropdown from "@/components/Dropdown"; // Assuming the file is named Dropdown.js

describe("Dropdown Component", () => {
  // Checks whether the Dropdown component renders correctly
  it("renders correctly", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    const { getByText } = render(<Dropdown options={options} />);

    // Checks whether all the options are rendered correctly
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
    expect(getByText("Option 3")).toBeInTheDocument();
  });

  // Checks whether the count of options passed matches the number of options rendered
  it("should display the correct number of options", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    render(<Dropdown options={options} />);
    expect(screen.getAllByRole("option").length).toBe(3);
  });

  // Checks whether the select value is updated correctly when the user selects an option
  it("updates selectValue correctly on option change", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    const { getByRole } = render(<Dropdown options={options} />);
    const selectElement = getByRole("combobox");

    fireEvent.change(selectElement, { target: { value: "Option 1" } });
    expect(selectElement).toHaveValue("Option 1");
  });
});
