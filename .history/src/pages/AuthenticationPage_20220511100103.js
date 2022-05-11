import React from "react";
import styled from "styled-components";

const AuthenticationStyle = styled.div``;

const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationStyle>
      <div className="container">
        <img srcSet="./logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>{" "}
      </div>
      {children}
    </AuthenticationStyle>
  );
};

export default AuthenticationPage;
