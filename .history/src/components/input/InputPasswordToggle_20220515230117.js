import { IconEyeClose, IconEyeOpen } from "components/icon";
import React, { useState } from "react";
import Input from "./Input";

const InputPasswordToggle = ({ control }) => {
  // Toggle password
  const [togglePassword, setTogglePassword] = useState(false);
  // handleTogglePasssword
  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };
  if (!control) return;
  return (
    <>
      <Input
        type={togglePassword ? "text" : "password"}
        name="password"
        className="input"
        placeholder="Enter your password"
        control={control}
      >
        {!togglePassword ? (
          <IconEyeClose onClick={handleTogglePassword}></IconEyeClose>
        ) : (
          <IconEyeOpen onClick={handleTogglePassword}></IconEyeOpen>
        )}
      </Input>
    </>
  );
};

export default InputPasswordToggle;
