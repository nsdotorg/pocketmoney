import classNames from "classnames";

const SolidButton = ({ text, classnames, handler }) => {
  const solidButtonClasses = classNames(
    "bg-[#ed002b] text-white p-4 rounded-lg w-full flex items-center justify-center",
    classnames
  );

  return (
    <button type="button" className={solidButtonClasses} onClick={handler}>
      {text}
    </button>
  );
};

export default SolidButton;
