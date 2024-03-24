const SingleExpense = ({ item }) => {
  return (
    <div className="flex justify-between items-center bg-[#e3e3e3] p-3 rounded-2xl">
      <div className="flex justify-center items-center">
        <div>{item.icon}</div>
        <p className="ml-2 text-sm font-light">{item.expenseType}</p>
      </div>
      <p className="font-medium text-sm mr-2">{item.expense}</p>
    </div>
  );
};

export default SingleExpense;
