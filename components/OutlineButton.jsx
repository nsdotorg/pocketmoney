import classNames from "classnames";

const OutlineButton = ({ text, classnames, handler }) => {
  const outlineButtonClasses = classNames(
    "border border-red-500 p-4 rounded-lg w-full flex items-center justify-center text-xs",
    classnames
  );
  return (
    <button type="button" className={outlineButtonClasses} onClick={handler}>
      {text}
    </button>
  );
};

export default OutlineButton;
