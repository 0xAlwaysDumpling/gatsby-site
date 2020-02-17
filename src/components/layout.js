import React, { useState } from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import Nav from "./nav";
import SideDrawer from "./sidedrawer";
import Backdrop from "./backdrop";

const themeLight = {
  text: "#000",
  background: "#fff",
  buttonText: "#000",
  buttonTextHover: "fff",
  buttonBorder: "#000",
  buttonBg: "rgba(0,0,0,0)",
  buttonBgHover: "rgba(0,0,0,1)"
}

const themeDark = {
  text: "#fff",
  background: "#121212",
  buttonText: "#fff",
  buttonTextHover: "#000",
  buttonBorder: "#fff",
  buttonBg: "rgba(255,255,255,0)",
  buttonBgHover: "rgba(255,255,255,1)"
}

export const SideDrawerContext = React.createContext();

const Layout = ({ children }) => {

  const [sideDrawerOpen, setDrawerState] = useState(false);
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <Global
        styles={theme => css`
        * {
          box-sizing: border-box;
          margin: 0;
        }
        * + * {
          margin-top: 1rem;
        }
        html,body {
          margin: 0;
          color:  ${theme.text};
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 18px;
          line-height: 1.4;
          background: ${theme.background};
        }
        /* remove margin for gatsby main div */
        > div {
          margin-top: 0;
        }
        h1,h2,h3,h4,h5 {
          color: ${theme.text};
          line-height: 1.1;

          +* {
            margin-top: 0.5rem;
          }

          li {
            margin-top: 0.25rem;
          }
        }
      `} />
      <SideDrawerContext.Provider value={{ sideDrawerOpen, setDrawerState, isDark, setIsDark }}>
        <Nav />
        {sideDrawerOpen && <Backdrop />}
        {sideDrawerOpen && <SideDrawer show={sideDrawerOpen} />}
      </SideDrawerContext.Provider>
      <main css={css`
          margin: 56px auto 4rem;
          max-width: 90vw;
        `}>
        {children}
      </main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
