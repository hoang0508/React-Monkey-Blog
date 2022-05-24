import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = ({ props }) => {
  const props = useDropdown();
  console.log("🚀 ~ file: Option.js ~ line 6 ~ Option ~ props", props);
  return (
    <div className="px-5 py-4 flex items-center justify-between hover:bg-gray-100">
      {props.children}
    </div>
  );
};

export default Option;
