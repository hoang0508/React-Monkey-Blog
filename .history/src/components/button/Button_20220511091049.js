import { LoadingSpiner } from "components/loading";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const ButtonStyles = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 0 25px;
  line-height: 1;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  height: ${(props) => props.height || "66px"};
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

/**
 * @requires
 * @param {string} type Type of 'button' | 'submit'
 * @returns
 */

const Button = ({ type = "text", onClick = () => {}, children, ...props }) => {
  const { isLoading } = props;
  // console.log("🚀 ~ file: Button.js ~ line 31 ~ Button ~ props", props);

  const child = !!isLoading ? <LoadingSpiner></LoadingSpiner> : children;
  return (
    <ButtonStyles type={type} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  );
};

//
Button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Button;
