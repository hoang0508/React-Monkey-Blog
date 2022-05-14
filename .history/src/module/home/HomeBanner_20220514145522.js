import React from "react";
import styled from "styled-components";

const HomePageStyles = styled.div`
  height: 520px;
  background-image: linear-gradient(
    to right bottom ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
`;
const HomeBanner = () => {
  return <HomePageStyles></HomePageStyles>;
};

export default HomeBanner;
