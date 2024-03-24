import classNames from "classnames";

const InputBox = ({ placeholder = "", classnames, value, handler }) => {
  const solidButtonClasses = classNames(
    "border-2 rounded-3xl block h-12 w-72 mx-8 p-4 mt-4",
    classnames
  );

  return (
    <input
      type="text"
      className={solidButtonClasses}
      placeholder={placeholder}
      value={value}
      onChange={handler}
    />
  );
};

export default InputBox;
