import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/core";
import Header from "./header/";

const Layout = ({ children }) => {
  const siteMetaDataSiteTitleQuery = graphql`query SiteMetaDataQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `
  const data = useStaticQuery(siteMetaDataSiteTitleQuery)

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
      `}/>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main css={css`
          margin: 2rem auto 4rem;
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
