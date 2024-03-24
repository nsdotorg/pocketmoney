import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import SolidButton from "@/components/SolidButton";
import OutlineButton from "@/components/OutlineButton";
import CircleButtons from "@/components/CircleButtons";
import InputBox from "@/components/InputBox";

export default function Registration() {
  const router = useRouter();

  // layout states for different parts of the registration page
  const [isNameLayout, setIsNameLayout] = useState(true);
  const [isAgeLayout, setIsAgeLayout] = useState(false);
  const [isParentsNamesLayout, setIsParentsNamesLayout] = useState(false);
  const [isGenderLayout, setIsGenderLayout] = useState(false);
  const [isPasswordLayout, setIsPasswordLayout] = useState(false);
  const [currentLayout, setCurrentLayout] = useState("NameLayout");

  // states to handle elements related to logic and magic password
  const [isLogicPasswordActive, setIsLogicPasswordActive] = useState(false);
  const [isMagicPasswordActive, setIsMagicPasswordActive] = useState(false);

  // states to store user input values on different layouts
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [momsName, setMomsName] = useState("");
  const [dadsName, setDadsName] = useState("");
  const [gender, setGender] = useState("");
  const [logicPassword, setLogicPassword] = useState("");

  const isRegistrationPageLayout =
    isNameLayout || isAgeLayout || isParentsNamesLayout || isGenderLayout;

  // handles user name change
  const nameHandler = (e) => {
    setUsername(e.target.value);
  };

  // handles user's mom's name change
  const momsNameHandler = (e) => {
    setMomsName(e.target.value);
  };

  // handles user's dad's name change
  const dadsNameHandler = (e) => {
    setDadsName(e.target.value);
  };

  // handles user's gender change
  const genderHandler = (value) => {
    setGender(value);
    setIsGenderLayout(false);
    setCurrentLayout("PasswordLayout"); // switches to password layout when the a gender option is clicked
    setIsPasswordLayout(true);
  };

  // changes layout elements when logic password is clicked by the user
  const logicPasswordLayoutHandler = (e) => {
    setIsGenderLayout(false);
    setCurrentLayout("PasswordLayout");
    setIsLogicPasswordActive(true);
  };

  // handles change in logic password when the user feeds the input
  const logicPasswordHandler = (e) => {
    const password = e.target.value;
    setLogicPassword(password);
  };

  // changes layout elements when magic password is clicked by the user
  const magicPasswordLayoutHandler = () => {
    setIsGenderLayout(false);
    setCurrentLayout("PasswordLayout");
    setIsMagicPasswordActive(true);
  };

  // handler to switch between different parts of registration layouts
  const nextLayoutHandler = () => {
    if (currentLayout === "NameLayout") {
      setCurrentLayout("AgeLayout");
      setIsNameLayout(false);
      setIsAgeLayout(true);
    } else if (currentLayout === "AgeLayout") {
      setCurrentLayout("ParentsNamesLayout");
      setIsAgeLayout(false);
      setIsParentsNamesLayout(true);
    } else if (currentLayout === "ParentsNamesLayout") {
      setCurrentLayout("GenderLayout");
      setIsParentsNamesLayout(false);
      setIsGenderLayout(true);
    } else if (currentLayout === "GenderLayout") {
      setCurrentLayout("PasswordLayout");
      setIsGenderLayout(false);
      setIsPasswordLayout(true);
    }
  };

  // handler to navigate to previous layouts when
  // the user clicks back button on any layout
  const previousLayoutHandler = () => {
    if (currentLayout === "AgeLayout") {
      setIsAgeLayout(false);
      setCurrentLayout("NameLayout");
      setIsNameLayout(true);
    } else if (currentLayout === "ParentsNamesLayout") {
      setIsParentsNamesLayout(false);
      setCurrentLayout("AgeLayout");
      setIsAgeLayout(true);
    } else if (currentLayout === "GenderLayout") {
      setIsGenderLayout(false);
      setCurrentLayout("ParentsNamesLayout");
      setIsParentsNamesLayout(true);
    } else if (isLogicPasswordActive && currentLayout === "PasswordLayout") {
      setIsLogicPasswordActive(false);
    } else if (isMagicPasswordActive && currentLayout === "PasswordLayout") {
      setIsMagicPasswordActive(false);
    } else if (currentLayout === "PasswordLayout") {
      setIsPasswordLayout(false);
      setCurrentLayout("GenderLayout");
      setIsGenderLayout(true);
    }
  };

  // handler to register a new user based on POST HTTP request to the server
  const registerUserHandler = async () => {
    const userData = {
      username,
      age,
      momsName,
      dadsName,
      gender,
      logicPassword: isLogicPasswordActive ? logicPassword : null,
      magicPassword: isMagicPasswordActive ? Math.random() : null,
    };

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      console.log("Form data saved successfully");
    } else {
      console.error("Failed to save form data");
    }

    // redirect to login page when the user has been registered
    router.push("/login");
  };

  return (
    <div className="m-4 text-center relative h-[100%]">
      <p className="font-bold text-xl pt-4">
        {isRegistrationPageLayout ? "Registration" : "Set your password"}
      </p>

      {/* switch image when the layout switches between registration and password layouts */}
      {isRegistrationPageLayout && (
        <Image
          width="180"
          height="180"
          alt="user image"
          src="/kid-with-pencil.png"
          className="mx-auto mt-2"
        />
      )}
      {!isRegistrationPageLayout && (
        <Image
          width="200"
          height="200"
          alt="user image"
          src="/3-kids.png"
          className="mx-auto mt-2"
        />
      )}

      {/* Registration Step 1 - Name */}
      {isNameLayout && (
        <div className="mt-4">
          <p className="font-bold">Hi buddy!</p>
          <p className="font-bold">What is your name?</p>
          <InputBox
            placeholder={""}
            classnames="border-[#008df3] mx-auto"
            value={username}
            handler={nameHandler}
          />
          <SolidButton
            text="Next"
            classnames="absolute bottom-12 left-0"
            handler={nextLayoutHandler}
          />
        </div>
      )}

      {/* Registration Step 2 - Age */}
      {isAgeLayout && (
        <div className="mt-4">
          <p className="font-bold">What is your age?</p>
          <CircleButtons age={age} setAge={setAge} />
          <SolidButton
            text="Next"
            classnames="absolute bottom-28 left-0"
            handler={nextLayoutHandler}
          />
          <OutlineButton
            text="Back"
            classnames="absolute bottom-12 left-0"
            handler={previousLayoutHandler}
          />
        </div>
      )}

      {/* Registration Step 3 - Parents' Names */}
      {isParentsNamesLayout && (
        <div className="mt-4">
          <p className="font-bold">What is your parents names?</p>
          <InputBox
            placeholder="Mom's name"
            classnames="border-[#ed002b] mx-auto text-xs"
            value={momsName}
            handler={momsNameHandler}
          />
          <InputBox
            placeholder="Dad's Name"
            classnames="border-[#ed002b] mx-auto text-xs"
            value={dadsName}
            handler={dadsNameHandler}
          />
          <SolidButton
            text="Next"
            classnames="absolute bottom-28 left-0"
            handler={nextLayoutHandler}
          />
          <OutlineButton
            text="Back"
            classnames="absolute bottom-12 left-0"
            handler={previousLayoutHandler}
          />
        </div>
      )}

      {/* Registration Step 4 - Gender */}
      {isGenderLayout && (
        <div className="mt-4">
          <p className="font-bold">Hi are you a boy or girl?</p>
          <div className="w-[10rem] grid grid-cols-2 gap-2 mx-auto mt-4">
            <button
              onClick={() => genderHandler("Boy")}
              className="h-16 w-16 border border-[#0075e2] rounded-full overflow-hidden p-2"
            >
              <Image
                width="90"
                height="90"
                alt="user image"
                src="/boy-cartoon.png"
              />
            </button>
            <button
              onClick={() => genderHandler("Girl")}
              className="h-16 w-16 border border-[#ed002b] rounded-full overflow-hidden p-2"
            >
              <Image
                width="90"
                height="90"
                alt="user image"
                src="/girl-cartoon.png"
              />
            </button>
          </div>
          <OutlineButton
            text="Back"
            classnames="absolute bottom-12 left-0"
            handler={previousLayoutHandler}
          />
        </div>
      )}

      {/* Registration Step 5 - Password */}
      {isPasswordLayout && (
        <div>
          <p className="font-bold w-[70%] mx-auto">
            Choose what type of password you want?
          </p>
          <div className="grid grid-cols-3 justify-center items-center gap-2 mt-4 w-[50%] mx-auto">
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={logicPasswordLayoutHandler}
                className={`h-16 w-16 rounded-full overflow-hidden p-2 bg-[#36dbff] transition ${
                  isLogicPasswordActive ? "scale-110" : ""
                }`}
              >
                <Image
                  width="90"
                  height="90"
                  alt="user image"
                  src="/astronaut-cartoon.png"
                />
              </button>
              <p className="mt-2 text-xs font-bold">
                Logic
                <br />
                Password
              </p>
            </div>
            <span className="font-bold -mt-10">or</span>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={magicPasswordLayoutHandler}
                className={`h-16 w-16 rounded-full overflow-hidden p-2 bg-[#a14087] transition ${
                  isMagicPasswordActive ? "scale-110" : ""
                }`}
              >
                <Image
                  width="90"
                  height="90"
                  alt="user image"
                  src="/genie-lamp-cartoon.png"
                />
              </button>
              <p className="mt-2 text-xs font-bold">
                Magic
                <br />
                Password
              </p>
            </div>
          </div>
          <SolidButton
            text="Next"
            classnames="absolute bottom-28 left-0"
            handler={registerUserHandler}
          />
          <OutlineButton
            text="Back"
            classnames="absolute bottom-12 left-0"
            handler={previousLayoutHandler}
          />
          {/* shows the logic password input box when the user click on logic passowrd for registration */}
          {isLogicPasswordActive && (
            <InputBox
              placeholder="Enter Password"
              classnames="border-[#ed002b] mx-auto text-xs"
              value={logicPassword}
              handler={logicPasswordHandler}
            />
          )}
        </div>
      )}
    </div>
  );
}
