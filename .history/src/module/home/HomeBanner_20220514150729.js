import React from "react";
import styled from "styled-components";

const HomePageStyles = styled.div`
  height: 520px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
`;
const HomeBanner = () => {
  return (
    <HomePageStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content"></div>
          <div className="banner-image">
            <img src="./img-banner.png" alt="banner" />
          </div>
        </div>
      </div>
    </HomePageStyles>
  );
};

export default HomeBanner;
