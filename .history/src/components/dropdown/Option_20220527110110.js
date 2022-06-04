import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = ({ children, ...props }) => {
  const { setShow } = useDropdown();
  const { onClick } = props;
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="px-5 py-4 flex items-center justify-between hover:bg-gray-100"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Option;
