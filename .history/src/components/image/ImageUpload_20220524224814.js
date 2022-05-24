import React from "react";

const ImageUpload = (props) => {
  const { name, className = "", ...rest } = props;
  return (
    <label
      className={`cursor-pointer flex items-center bg-gray-100 border-dashed w-full`}
    >
      <input />
    </label>
  );
};

export default ImageUpload;
