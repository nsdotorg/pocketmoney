import { render, screen } from "@testing-library/react";
import AddExpense from "@/components/AddExpense";

describe("AddExpense component", () => {
  it("renders with correct content", () => {
    render(<AddExpense />);

    // Checks whether the user image is rendered with correct alt text
    const userImage = screen.getByAltText("user image");
    expect(userImage).toBeInTheDocument();

    // Checks whether the text content is rendered correctly
    const textContent = screen.getByText(/Hi dear take care of your/i);
    expect(textContent).toBeInTheDocument();

    // Checks whether the DummyButton is rendered with correct text
    const addButton = screen.getByText(/Add to expenses/i);
    expect(addButton).toBeInTheDocument();
  });
});
