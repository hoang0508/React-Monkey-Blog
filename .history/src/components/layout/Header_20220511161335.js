import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  .header-main {
    display: flex;
    align-items: center;
  }
  .logo {
    display: block;
    max-width: 50px;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
  }
`;

const menuLink = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/",
    title: "Blog",
  },
  {
    url: "/",
    title: "Contact",
  },
];

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <a href="/">
            <img
              srcSet="./logo.png 2x"
              alt="monkey-blogging"
              className="logo"
            />
          </a>
          <ul className="menu">
            {menuLink &&
              menuLink.map((item) => (
                <li className="menu-item" key={item.title}>
                  <a href={item.url} className="menu-link">
                    {item.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
