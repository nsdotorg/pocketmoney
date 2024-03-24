import { render } from "@testing-library/react";
import SingleExpense from "@/components/SingleExpense";

describe("SingleExpense Component", () => {
  const expenseItem = {
    expenseType: "Groceries",
    expense: "$50",
  };

  // Checks whether the SingleExpense item renders correct expense items
  it("renders expense item correctly", () => {
    const { getByText } = render(<SingleExpense item={expenseItem} />);
    expect(getByText("Groceries")).toBeInTheDocument();
    expect(getByText("$50")).toBeInTheDocument();
  });
});
