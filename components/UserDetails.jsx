import Image from "next/image";

const UserDetails = () => {
  return (
    <>
      <div className="w-[110%] bg-[#ffe33f] h-32 -ml-[1.5rem] rounded-b-full relative z-0">
        <div className="absolute top-4 right-[10.5rem] text-center">
          <p className="text-xl font-bold">Hi Krish</p>
          <p className="font-medium">Good Morning</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-[70%] mx-auto -mt-14">
        <div className="flex flex-col items-center justify-center z-10 mt-5">
          <p className="bg-[#ff1717] rounded-full h-10 w-10 text-white text-sm flex justify-center items-center">
            255
          </p>
          <p className="font-medium mt-1">Points</p>
        </div>
        <div className="z-10">
          <Image
            width="90"
            height="90"
            alt="user image"
            src="/child-profile.png"
            className="bg-white rounded-full border-2 border-yellow-200"
          />
        </div>
        <div className="flex flex-col items-center justify-center z-10 mt-5">
          <p className="bg-[#0048b4] rounded-full h-10 w-10 text-white text-sm flex justify-center items-center">
            10
          </p>{" "}
          <p className="font-medium mt-1">Badges</p>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
