import { IconEyeOpen } from "components/icon";
import React from "react";
import styled from "styled-components";
const InputStyles = styled.div`
  width: 100%;
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
`;
const Input = ({ name = "", type = "text", children, hasIcon, ...props }) => {
  return (
    <InputStyles>
      <input id={name} type={type} {...props} />
      {hasIcon ? <IconEyeOpen></IconEyeOpen> : null}
    </InputStyles>
  );
};

export default Input;
