import Image from "next/image";
import DummyButton from "./DummyButton";

const AddExpense = () => {
  return (
    <div className="w-[90%] mx-auto bg-[#87efac] flex items-center relative rounded-lg px-3 py-2 mt-3">
      <Image
        width="60"
        height="60"
        alt="user image"
        src="/child-profile.png"
        className="rounded-full bg-white"
      />
      <p className="ml-2 font-medium text-sm">
        Hi dear take care of your
        <br />
        spendings
      </p>
      <DummyButton
        classnames="absolute -bottom-2 right-3"
        text="Add to expenses"
      />
    </div>
  );
};

export default AddExpense;
