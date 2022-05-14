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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        labore necessitatibus iusto dolores aut officia perferendis accusantium
        optio repudiandae quod! Earum voluptates esse aut, adipisci deleniti
        excepturi praesentium fugit incidunt.
      </div>
    </HomePageStyles>
  );
};

export default HomeBanner;
