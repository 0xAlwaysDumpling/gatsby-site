import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby"


const NavLink = styled(Link)`
  color: ${props => props.fontColor || 'black'};
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;


const NavLinks = () => {
  return (
    <ul>
      <li><NavLink to="/blog" activeClassName="current-page">Blog</NavLink></li>
      <li><NavLink to="/projects" activeClassName="current-page">Projects</NavLink></li>
      <li><NavLink to="/products" activeClassName="current-page">Products</NavLink></li>
    </ul>
  );
}

export default NavLinks;