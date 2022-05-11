import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 25px;
  line-height: 1;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
`;

const Button = ({ type = "text", onClick = () => {}, children, ...props }) => {
  return (
    <ButtonStyles type={type} onClick={onClick} {...props}>
      {children}
    </ButtonStyles>
  );
};

export default Button;