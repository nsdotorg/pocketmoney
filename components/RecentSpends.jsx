import Dropdown from "./Dropdown";
import Expenses from "./Expenses";

const RecentSpends = () => {
  const options = ["This Month", "Last Month"];

  return (
    <>
      <p className="w-[90%] mx-auto font-medium mt-8">Your recent spends</p>
      <div className="flex items-center justify-between w-[90%] mx-auto my-2">
        <p className="text-xs">Total: $224</p>
        <Dropdown options={options} />
      </div>
      <Expenses />
    </>
  );
};

export default RecentSpends;
