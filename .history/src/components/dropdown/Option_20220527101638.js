import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = ({ children, ...props }) => {
  const { onClick } = useDropdown();
  console.log("🚀 ~ file: Option.js ~ line 6 ~ Option ~ onClick", onClick);

  return (
    <div className="px-5 py-4 flex items-center justify-between hover:bg-gray-100">
      {children}
    </div>
  );
};

export default Option;
