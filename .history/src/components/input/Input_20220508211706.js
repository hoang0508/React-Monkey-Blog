import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
const InputStyles = styled.div`
  width: 100%;
  position: relative;
  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px ")};
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
const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({ name, defaultValue: "", control });
  return (
    <InputStyles hasIcon={children ? true : ""}>
      <input id={name} type={type} {...field} {...props} />
      {children ? <div className="input-icon">{children}</div>}
    </InputStyles>
  );
};

export default Input;
