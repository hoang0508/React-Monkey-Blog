import Header from "components/layout/Header";
import HomeBanner from "module/home/HomeBanner";
import React from "react";
import styled from "styled-components";

const HomePageStyles = styled.div``;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Header />
      <HomeBanner></HomeBanner>
    </HomePageStyles>
  );
};

export default HomePage;
