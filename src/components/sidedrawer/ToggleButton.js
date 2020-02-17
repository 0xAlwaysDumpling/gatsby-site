import React, { useContext } from 'react';
import styled from "@emotion/styled";
import { SideDrawerContext } from '../layout';

const ButtonContainer = styled.button`
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
  :focus {
    outline: none;
  }
  @media (min-width:769px) {
    display: none;
  }
`;
const ToggleButtonLine = styled.div`
  width: 30px;
  height: 1px;
  background: grey;
  margin:0;
`;

const ToggleButton = () => {
  const sideDrawerContext = useContext(SideDrawerContext);
  return (
    <ButtonContainer onClick={() => sideDrawerContext.setDrawerState(!sideDrawerContext.sideDrawerOpen)}>
      <ToggleButtonLine />
      <ToggleButtonLine />
      <ToggleButtonLine />
    </ButtonContainer>
  );
}

export default ToggleButton;
