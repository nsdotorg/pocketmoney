import { GiWallet } from "react-icons/gi";
import DummyButton from "./DummyButton";

const Balance = () => {
  return (
    <div className="w-[90%] mx-auto text-white bg-[#1e4df4] flex items-center relative rounded-md px-3 py-2 mt-10">
      <GiWallet className="w-[60px] h-[60px] text-[#ffb125]" />
      <div className="flex justify-between items-center ml-2 w-full">
        <div className="flex flex-col">
          <p className="font-medium text-sm">Your balance</p>
          <div className="font-normal">
            <span className="text-xs">$</span>
            <span className="ml-1 text-2xl">548.00</span>
          </div>
        </div>
        <DummyButton classnames="mr-2" text="Ask Money" />
      </div>
    </div>
  );
};

export default Balance;
