import React, { useContext } from "react";
import styled from "@emotion/styled"
import { SideDrawerContext } from "../layout";

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 100;
`;

const Background = () => {
  const sideDrawerContent = useContext(SideDrawerContext);
  return (
    <Backdrop onClick={() => sideDrawerContent.setDrawerState(false)} />
  )
}

export default Background;