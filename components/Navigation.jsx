import Link from "next/link";

import { BsQrCode } from "react-icons/bs";
import { CgMoreVertical } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { GoHome, GoGoal } from "react-icons/go";

const Navigation = () => {
  return (
    <div className="absolute bottom-0 bg-[#bbb] w-full p-4 rounded-t-3xl">
      <div className="flex justify-between items-center px-4">
        <div className="grid grid-cols-2 gap-6">
          <Link className="flex flex-col justify-center items-center" href="/">
            <GoHome data-testid="home-icon" className="w-6 h-6" />
            <p className="text-xs font-bold mt-1">Home</p>
          </Link>
          <Link className="flex flex-col justify-center items-center" href="/">
            <GoGoal data-testid="goal-icon" className="w-6 h-6" />
            <p className="text-xs font-bold mt-1">Goals</p>
          </Link>
        </div>
        <div className="bg-[#ed002b] text-white h-[4.5rem] w-[4.5rem] rounded-full flex flex-col items-center justify-center border-2 border-white -mt-20">
          <BsQrCode className="w-[1.4rem] h-[1.4rem]" />
          <p className="font-medium text-sm">Pay</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Link className="flex flex-col justify-center items-center" href="/">
            <FaTasks data-testid="tasks-icon" className="w-6 h-6" />
            <p className="text-xs font-bold mt-1">Tasks</p>
          </Link>
          <Link className="flex flex-col justify-center items-center" href="/">
            <CgMoreVertical data-testid="more-icon" className="w-6 h-6" />
            <p className="text-xs font-bold mt-1">More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
