import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from "gatsby";
import { useTheme } from "emotion-theming";


const SocialMediaLinksContainer = styled.div`
    color: rgb(0, 0, 0);
    font-size: 1.35rem;
    text-align: center;
    margin-top: 2rem;
`;

export const SocialLink = styled.a`
    font-weight: 400;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all .25s;
    margin: .75em;
`;


const SocialMediaLinks = () => {
  const userInfo = useStaticQuery(graphql`
  query SiteMetaDataUserQuery {
    site {
      siteMetadata {
        email,
        githubUrl,
        mediumUrl,
        linkedinUrl
        }
      }
    }
  `)
  const { githubUrl, linkedinUrl, mediumUrl, email } = userInfo.site.siteMetadata;
  const theme = useTheme();
  return (
    <SocialMediaLinksContainer>
      <SocialLink href={githubUrl} style={{ 'marginLeft': '0!important' }}>
        <FontAwesomeIcon icon={['fab', 'github']} color={theme.text} width="24" />
      </SocialLink>
      <SocialLink href={linkedinUrl}>
        <FontAwesomeIcon icon={['fab', 'linkedin']} color={theme.text} width="24" />
      </SocialLink>
      <SocialLink href={`mailto:${email}`}>
        <FontAwesomeIcon icon={['fas', 'envelope']} color={theme.text} width="24" />
      </SocialLink>
      <SocialLink href={mediumUrl} style={{ 'marginRight': '0!important' }}>
        <FontAwesomeIcon icon={['fab', 'medium']} color={theme.text} width="24" />
      </SocialLink>
    </SocialMediaLinksContainer>
  )
}

export default SocialMediaLinks;