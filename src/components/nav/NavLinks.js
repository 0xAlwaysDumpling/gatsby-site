import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby"
import { SideDrawerContext } from "../layout";

const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  font-size: 1rem;
  font-weight: 'normal';
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid ${props => props.theme.buttonBorder};
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const DarkModeButton = styled.button`
  border:none;
  background:transparent;
  outline: none;
`;

const NavLinks = () => {

  const sideDrawerContext = useContext(SideDrawerContext);

  return (
    <>
      <ul>
        <li><NavLink to="/blog" activeClassName="current-page">Blog</NavLink></li>
        <li><NavLink to="/projects" activeClassName="current-page">Projects</NavLink></li>
        <li><NavLink to="/products" activeClassName="current-page">Products</NavLink></li>
        <li><DarkModeButton onClick={() => sideDrawerContext.setIsDark(!sideDrawerContext.isDark)}>🌛</DarkModeButton></li>
      </ul>
    </>
  );
}

export default NavLinks;