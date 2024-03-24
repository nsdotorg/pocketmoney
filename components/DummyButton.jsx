import classNames from "classnames";

const DummyButton = ({ text, classnames }) => {
  const dummyButtonClasses = classNames(
    "bg-[#ed002b] text-white text-[10px] p-2 rounded-md",
    classnames
  );

  return (
    <button type="button" className={dummyButtonClasses}>
      {text}
    </button>
  );
};

export default DummyButton;
