import React from "react";
import styled from "styled-components";

const AuthenticationStyle = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
  .have-acount {
    margin-bottom: 20px;
    a {
      display: inline-block;
      color: ${(props) => props.theme.primary};
    }
  }
`;

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
