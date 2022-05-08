import React from "react";
import styled from "styled-components";
const FieldStyles = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px 0;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Field = ({ children }) => {
  return <FieldStyles></FieldStyles>;
};

export default Field;
