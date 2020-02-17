import React from "react";
import styled from "@emotion/styled";
import NavLinks from "../nav/NavLinks";

const SideDrawerContainer = styled.nav`
  height: 100%;
  background: ${props => props.theme.background};
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  margin-top: 0;
  max-width: 400px;
  z-index: 200;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%'};
  transition: transform 0.3s ease-out;
`;

const NavigationItems = styled.div`
  height: 100%;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
  }  
  li {
    padding: 0 0.5rem;
    margin: 0.5rem 0;
  }
`;

const SideDrawer = () => (
  <SideDrawerContainer>
    <NavigationItems>
      <NavLinks />
    </NavigationItems>
  </SideDrawerContainer>
);

export default SideDrawer;