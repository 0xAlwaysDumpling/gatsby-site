import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from "gatsby";


const EmailMeContainer = styled.div`
    text-align: center;
    margin-top: 2rem;
`;

const EmailMeButton = styled.a`
    background-color: rgb(52, 68, 241);
    border-radius: 0.65rem;
    color: rgb(255, 255, 255);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding-left: 4.15em;
    padding-right: 4.15em;
    text-align: center;
    width: auto;
    padding: 1em 3em;
    transition: all .25s;
    display: inline-block;
    border: 1px solid grey;
    cursor: pointer;
    border: none;
    text-decoration: none;
`;

const EmailMe = () => {
  const userInfo = useStaticQuery(graphql`
  query SiteMetaDataSiteEmail {
    site {
      siteMetadata {
        email,
        }
      }
    }
  `)
  const { email } = userInfo.site.siteMetadata;;
  return (
    <EmailMeContainer>
      <EmailMeButton href={`mailto:${email}`}>
        <FontAwesomeIcon icon={['fa', 'circle-notch']} color="white" width="12" style={{ marginRight: '4px' }} />
        Email
      </EmailMeButton>
    </EmailMeContainer>
  )
}

export default EmailMe;