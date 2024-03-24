import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { RiTriangleFill } from "react-icons/ri";

export default function Home() {
  const router = useRouter();

  // push the user to login page when the Next button is clicked
  // (for registered users)
  const loginHandler = () => {
    router.push("/login");
  };

  return (
    <div className="w-[25rem] h-[50rem] bg-white relative overflow-hidden">
      <Image
        width="180"
        height="180"
        alt="user image"
        src="/pocket-money-logo.png"
        className="mx-auto mt-10"
      />
      <div className="absolute w-[38rem] h-[38rem] rounded-full bg-[#23d7ff] -bottom-[6rem] -right-[2rem]"></div>
      <div className="absolute w-[30rem] h-[30rem] rounded-full bg-[#6bff95] -bottom-[6rem] -right-[2rem]"></div>
      <div className="absolute w-[22rem] h-[22rem] rounded-full bg-[#ffe33f] -bottom-[5rem] -right-[2rem]"></div>
      <div className="absolute bottom-4 w-full p-6">
        <button
          className="bg-[#ed002b] w-full text-white p-4 rounded-lg flex items-center justify-center"
          onClick={loginHandler}
        >
          Next
        </button>
        <Link
          className="flex items-center justify-center text-center mt-6"
          href="/registration"
        >
          No, I am new to this{" "}
          <RiTriangleFill className="rotate-90 text-black ml-2" />
        </Link>
      </div>
    </div>
  );
}
