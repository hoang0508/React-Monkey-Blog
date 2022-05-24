import React from "react";

const Radio = ({ children }) => {
  return (
    <label>
      <input type="radio" className="hidden-input" />
      <div className="flex items-center gap-x-3 font-medium cursor-pointer">
        <div className="w-7 h-7 rounded-full bg-gray-200"></div>
        <span>{children}</span>
      </div>
    </label>
  );
};

export default Radio;
