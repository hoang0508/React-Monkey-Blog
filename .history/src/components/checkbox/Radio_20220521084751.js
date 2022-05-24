import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ children, checked, control, name, ...rest }) => {
  console.log("🚀 ~ file: Radio.js ~ line 5 ~ Radio ~ checked", checked);
  console.log("🚀 ~ file: Radio.js ~ line 5 ~ Radio ~ rest", rest);
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <label>
      <input
        onChange={() => {}}
        type="radio"
        checked={checked}
        {...rest}
        {...field}
        className="hidden-input"
      />
      <div className="flex items-center gap-x-3 font-medium cursor-pointer">
        <div
          className={`w-7 h-7 rounded-full ${
            checked ? "bg-green-400" : "bg-gray-200"
          }`}
        ></div>
        <span>{children}</span>
      </div>
    </label>
  );
};

export default Radio;
