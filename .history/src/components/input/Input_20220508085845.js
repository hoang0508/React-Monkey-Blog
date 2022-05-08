import { IconEyeOpen } from "components/icon";
import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
const InputStyles = styled.div`
  width: 100%;
  position: relative;
  input {
    width: 100%;
    padding: 20px;
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    border: 1px solid transparent;
    font-weight: 500;
    transition: all 0.2s linear;
  }
  input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
  input::-webkit-input-placeholder {
    color: #84878b;
  }
  input::-moz-input-placeholder {
    color: #84878b;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
const Input = ({
  name = "",
  type = "text",
  children,
  hasIcon,
  control,
  ...props
}) => {
  const { field } = useController({ name, defaultValue: "", control });
  return (
    <InputStyles>
      <input id={name} type={type} {...field} {...props} />
      {hasIcon ? <IconEyeOpen className="input-icon"></IconEyeOpen> : null}
    </InputStyles>
  );
};

export default Input;
