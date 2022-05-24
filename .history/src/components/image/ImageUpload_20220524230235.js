import React from "react";

const ImageUpload = (props) => {
  const { name, className = "", ...rest } = props;
  return (
    <label
      className={`cursor-pointer flex items-center justify-center bg-gray-100 border-dashed w-full min-h-[200px] rounded-lg ${className} relative overflow-hidden`}
    >
      <input
        name={name}
        className="hidden-input"
        onChange={() => {}}
        {...rest}
      />
      <div className="flex flex-col items-center text-center pointer-events-none">
        <img
          src="/img-upload.png"
          alt="upload-img"
          className="max-w-[80px] mb-5"
        />
        <p className="font-semibold">Choose photo</p>
      </div>
      <div className="absolute w-10 h-1 bg-green-400 left-0 bottom-0 transition-all image-upload-progress"></div>
    </label>
  );
};

export default ImageUpload;
