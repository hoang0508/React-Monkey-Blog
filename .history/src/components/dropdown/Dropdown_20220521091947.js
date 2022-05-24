import React from "react";

const Dropdown = ({
  placeholder = "Please select an option",
  children,
  ...props
}) => {
  return (
    <div className="relative inline-block w-full">
      <div className="flex items-center justify-between p-5 bg-[#E7ECF3] rounded cursor-pointer">
        <span>{placeholder}</span>
      </div>
      <div className="absolute top-full left-0 w-full bg-white shadow-sm">
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
