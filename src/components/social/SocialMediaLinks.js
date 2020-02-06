import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from "gatsby";



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

  return (
    <SocialMediaLinksContainer>
      <SocialLink href={githubUrl} style={{ 'marginLeft': '0!important' }}>
        <FontAwesomeIcon icon={['fab', 'github']} color="black" width="24" />
      </SocialLink>
      <SocialLink href={linkedinUrl}>
        <FontAwesomeIcon icon={['fab', 'linkedin']} color="#0077B5" width="24" />
      </SocialLink>
      <SocialLink href={`mailto:${email}`}>
        <FontAwesomeIcon icon={['fas', 'envelope']} color="black" width="24" />
      </SocialLink>
      <SocialLink href={mediumUrl} style={{ 'marginRight': '0!important' }}>
        <FontAwesomeIcon icon={['fab', 'medium']} color="black" width="24" />
      </SocialLink>
    </SocialMediaLinksContainer>
  )
}

export default SocialMediaLinks;