import React from "react";

const Option = (props) => {
  return (
    <div className="px-5 py-4 flex items-center justify-between hover:bg-gray-100">
      {props.children}
    </div>
  );
};

export default Option;
