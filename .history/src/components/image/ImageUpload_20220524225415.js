import React from "react";

const ImageUpload = (props) => {
  const { name, className = "", ...rest } = props;
  return (
    <label
      className={`cursor-pointer flex items-center bg-gray-100 border-dashed w-full min-h-[200px] rounded-lg ${className} relative overflow-hidden`}
    >
      <input
        name={name}
        className="hidden-input"
        onChange={() => {}}
        {...rest}
      />
      <div className="flex flex-col items-center text-center pointer-events-none">
        <img src="/img-upload.png" alt="upload-img" />
        <p className="font-semibold">Choose photo</p>
      </div>
    </label>
  );
};

export default ImageUpload;
