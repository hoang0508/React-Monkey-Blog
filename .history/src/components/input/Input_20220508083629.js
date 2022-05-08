import React from "react";
import styled from "styled-components";
const InputStyles = styled.div`
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
const Input = ({ name = "", type = "text", children, ...props }) => {
  return (
    <InputStyles>
      <input id={name} type={type} {...props} />
    </InputStyles>
  );
};

export default Input;
