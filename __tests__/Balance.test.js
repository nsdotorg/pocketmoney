import { render } from "@testing-library/react";
import Balance from "@/components/Balance";

describe("Balance Component", () => {
  // Checks whether the Balance component is rendered correctly
  it("renders Balance component correctly", () => {
    const { getByText } = render(<Balance />);

    // Checks whether the "Your balance" text is rendered
    expect(getByText("Your balance")).toBeInTheDocument();
  });

  // Checks whether the "Ask Money" button is rendered
  it("renders Ask Money button", () => {
    const { getByText } = render(<Balance />);
    expect(getByText("Ask Money")).toBeInTheDocument();
  });
});
