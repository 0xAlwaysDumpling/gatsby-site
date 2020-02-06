import React from "react";
import Header from "./header";
import Medium from "../medium/LatestMedium";
import Featured from "../featured";

const Landing = () => {
  return (
  <>
    <Header/>
    <Featured/>
    <Medium/>
  </>
  );
}

export default Landing;