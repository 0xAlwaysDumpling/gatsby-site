import React from "react";
import { Link } from "gatsby"
import styled from "@emotion/styled";
import ToggleButton from "../sidedrawer/ToggleButton";
import NavLinks from "./NavLinks";


const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 56px;
  background: ${props => props.theme.background};  
  border-bottom: 1px solid ${props => props.theme.buttonBorder};
  z-index: 500;
`;

const Navigation = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem 1rem;
  position: relative;
`;

const NavigationItems = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }  
  li {
    padding: 0 0.5rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


const Logo = styled.div`
  font-size: 1.5rem;
  margin-left: .5rem;
  a {
    text-decoration: none;
    color: ${props => props.theme.text};
  }
  @media (max-width: 768px) {
    display: flex;
    right: 0;
    position: absolute;
    margin-right: 1rem;
    margin-left: 0;
    margin-top: .5rem;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;


const Nav = () => {
  return (
    <Header>
      <Navigation>
        <ToggleButton />
        <Logo><Link to="/">JT</Link></Logo>
        <Spacer />
        <NavigationItems>
          <NavLinks />
        </NavigationItems>
      </Navigation>
    </Header>
  );
}

export default Nav;