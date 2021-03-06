import { LoadingSpiner } from "components/loading";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const ButtonStyles = styled.button`
  cursor: pointer;
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
  ${(props) =>
    props.kind === "secondary" &&
    css`
      background-color: #fff;
      color: ${(props) => props.theme.primary};
    `};
  ${(props) =>
    props.kind === "primary" &&
    css`
      color: #fff;
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
      );
    `};
  ${(props) =>
    props.kind === "ghost" &&
    css`
      color: ${(props) => props.theme.primary};
      background-color: rgba(29, 192, 113, 0.1);
    `};
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
// Param button
/**
 * @param {*} onClick Handler onClick
 * @requires
 * @param {string} type Type of 'button' | 'submit'
 * @returns
 */

const Button = ({
  type = "text",
  onClick = () => {},
  kind = "primary",
  children,
  ...props
}) => {
  const { isLoading, to } = props;
  // child
  const child = !!isLoading ? <LoadingSpiner></LoadingSpiner> : children;
  // NavLink , to
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to} style={{ display: "inline-block" }}>
        <ButtonStyles type={type} kind={kind} onClick={onClick} {...props}>
          {child}
        </ButtonStyles>
      </NavLink>
    );
  }
  return (
    <ButtonStyles type={type} kind={kind} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  );
};

// Proptypes
Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
