import React, { useState } from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core";
import Nav from "./nav";
import SideDrawer from "./sidedrawer";
import Backdrop from "./backdrop";

export const SideDrawerContext = React.createContext();
const Layout = ({ children }) => {
  const [sideDrawerOpen, setDrawerState] = useState(false);

  return (
    <>
      <Global
        styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }
        * + * {
          margin-top: 1rem;
        }
        html,body {
          margin: 0;
          color: black;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 18px;
          line-height: 1.4;
        }
        /* remove margin for gatsby main div */
        > div {
          margin-top: 0;
        }
        h1,h2,h3,h4,h5 {
          color: #222;
          line-height: 1.1;

          +* {
            margin-top: 0.5rem;
          }

          strong {
            color: #222;
          }
          li {
            margin-top: 0.25rem;
          }
        }
      `} />
      <SideDrawerContext.Provider value={{ sideDrawerOpen, setDrawerState }}>
        <Nav />
        {sideDrawerOpen && <SideDrawer show={sideDrawerOpen} />}
        {sideDrawerOpen && <Backdrop />}
      </SideDrawerContext.Provider>
      <main css={css`
          margin: 5rem auto 4rem;
          max-width: 90vw;
        `}>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
