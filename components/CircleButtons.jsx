import CircleButtonSingle from "@/components/CircleButtonSingle";

const CircleButtons = ({ age, setAge }) => {
  const buttonArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  const ageHandler = (e) => {
    const nodes = document.querySelectorAll(".age");
    nodes.forEach((node) => {
      node.style.backgroundColor = "white";
      node.style.color = "black";
    });

    const age = e.target.innerText;
    e.target.style.backgroundColor = "black";
    e.target.style.color = "white";
    setAge(age);
  };

  return (
    <div className="grid grid-cols-5 w-[14rem] gap-4 mx-auto mt-6">
      {buttonArray.map((item, index) => {
        return (
          <CircleButtonSingle
            item={item}
            age={age}
            handler={ageHandler}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CircleButtons;
