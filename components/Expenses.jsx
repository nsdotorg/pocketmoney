import SingleExpense from "@/components/SingleExpense";

import { GiBookshelf } from "react-icons/gi";
import { CiIceCream } from "react-icons/ci";
import { HiOutlineCake } from "react-icons/hi2";
import { TfiGift } from "react-icons/tfi";

const Expenses = () => {
  const expenses = [
    {
      icon: <HiOutlineCake className="w-6 h-6 text-purple-500" />,
      expenseType: "Friends birthday",
      expense: "$24",
    },
    {
      icon: <CiIceCream className="w-6 h-6 text-red-500" />,
      expenseType: "Ice Cream",
      expense: "$24",
    },
    {
      icon: <GiBookshelf className="w-6 h-6 text-orange-500" />,
      expenseType: "Notebooks",
      expense: "$24",
    },
    {
      icon: <TfiGift className="w-6 h-6 text-green-500" />,
      expenseType: "Gifts",
      expense: "$24",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-[0.2rem] w-[90%] mx-auto">
      {expenses.map((item, index) => {
        return <SingleExpense item={item} key={index} />;
      })}
    </div>
  );
};

export default Expenses;
