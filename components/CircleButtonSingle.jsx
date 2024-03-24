const CircleButtonSingle = ({ item, age, handler }) => {
  return (
    <button
      type="button"
      className={`age border border-black font-medium w-8 h-8 p-4 rounded-full flex items-center justify-center ${
        item === parseInt(age) ? "bg-black text-white" : "bg-white text-black"
      }`}
      onClick={handler}
    >
      {item}
    </button>
  );
};

export default CircleButtonSingle;
