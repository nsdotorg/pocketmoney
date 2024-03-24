import React from "react";
import { useState } from "react";

const Dropdown = ({ options }) => {
  const [selectValue, setSelectValue] = useState("This Month");

  return (
    <select
      className="border border-[#ed002b] rounded-lg px-1 py-1 w-[6.5rem] text-xs"
      value={selectValue}
      onChange={setSelectValue}
    >
      {options.map((item, index) => {
        return (
          <option className="text-xs" key={index}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
