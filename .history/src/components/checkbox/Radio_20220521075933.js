import React from "react";

const Radio = ({ children }) => {
  return (
    <label>
      <input type="radio" className="hidden-input" />
      <div className="flex items-center gap-x-3 font-medium cursor-pointer">
        <div></div>
        <span>{children}</span>
      </div>
    </label>
  );
};

export default Radio;
