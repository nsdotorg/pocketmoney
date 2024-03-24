import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import InputBox from "@/components/InputBox";
import UserData from "../../userData.json";

export default function Login() {
  const router = useRouter();
  const { logicPassword, magicPassword } = UserData;

  const [firstInput, setFirstInput] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [secondInput, setSecondInput] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [logicPasscode, setLogicPasscode] = useState("");

  // redirect the user to registration page when both logic and magic password are not set
  if (!logicPassword && !magicPassword) {
    router.push("/registration");
  }

  // function to redirect the user to the correct page based on whether
  // the logic or magic password is set
  const loginHandler = () => {
    if (magicPassword) {
      const userAnswer = parseInt(answer);
      const correctAnswer = firstInput + secondInput;

      if (userAnswer === correctAnswer) {
        router.push("/dashboard");
        setFeedback("Loading dashboard...");
      } else {
        setFeedback("Incorrect answer. Please try again.");
        setFirstInput(Math.floor(Math.random() * 10) + 1);
        setSecondInput(Math.floor(Math.random() * 10) + 1);
      }
    } else if (logicPassword) {
      if (logicPasscode.toString() === logicPassword) {
        router.push("/dashboard");
        setFeedback("Loading Dashboard...");
      } else {
        setFeedback("Incorrect password. Please try again.");
      }
    }
  };

  return (
    <div className="w-[25rem] h-[50rem] bg-white relative overflow-hidden">
      <p className="font-bold text-xl pt-4 text-center mt-[10rem] relative z-10">
        Login
      </p>
      <Image
        width="200"
        height="200"
        alt="user image"
        src="/kid-with-pencil.png"
        className="mx-auto mt-2 z-10 relative"
      />
      <div className="absolute w-[56rem] h-[56rem] rounded-full bg-[#23d7ff] -bottom-[6rem] -right-[8rem] z-0"></div>
      <div className="absolute w-[45rem] h-[45rem] rounded-full bg-[#6bff95] -bottom-[6rem] -right-[5rem] z-0"></div>
      <div className="absolute w-[35rem] h-[35rem] rounded-full bg-[#ffe33f] -bottom-[9rem] -right-[5rem] z-0"></div>

      {/* layout to ask user to enter logic password when the user has registered via logic password */}
      {logicPassword && !magicPassword && (
        <div>
          <p className="font-medium text-lg pt-4 text-center relative z-10">
            Enter your logic password
          </p>
          <InputBox
            placeholder={""}
            classnames="border-[#008df3] mx-auto relative z-10 w-[40%]"
            value={logicPasscode}
            handler={(e) => setLogicPasscode(e.target.value)}
          />
          {feedback && (
            <div className="flex justify-center items-center mt-2">
              <p style={{ color: "red" }} className="z-10 relative">
                {feedback}
              </p>
            </div>
          )}
        </div>
      )}

      {/* layout to ask user to solve a math problem when the user has registered via magic password */}
      {!logicPassword && magicPassword && (
        <div>
          <p className="font-medium text-lg pt-4 text-center relative z-10">
            Solve the below problem
          </p>
          <p className="font-medium text-lg pt-4 text-center relative z-10">
            {firstInput} + {secondInput} =
          </p>
          <InputBox
            placeholder={""}
            classnames="border-[#008df3] mx-auto relative z-10 w-[40%]"
            value={answer}
            handler={(e) => setAnswer(e.target.value)}
          />
          {feedback && (
            <div className="flex justify-center items-center mt-2">
              <p style={{ color: "red" }} className="z-10 relative">
                {feedback}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="absolute bottom-16 w-full p-6">
        <button
          className="bg-[#ed002b] w-full text-white p-4 rounded-lg flex items-center justify-center"
          onClick={loginHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}
