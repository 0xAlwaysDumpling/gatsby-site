import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "emotion-theming";

const LinksContainer = styled.div`
    padding: 0px 16px;
    display: inline-block;
    text-align: center;
`;

const Link = styled.a`
    font-weight: 400;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all .25s;
    margin: 1em;
    color: ${props => props.theme.text};
`;


function Links({ project }) {
  const webLink = project.website ? project.website : project.directLink;
  const theme = useTheme();
  return (
    <LinksContainer>
      {
        webLink ?
          <Link href={webLink} style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={['fa', 'globe']} color={theme.buttonText} width="24" />
          </Link>
          : ""
      }
      {
        project.playStore ?
          <Link href={project.playStore} style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={['fab', 'android']} color="#a4c639" width="24" />
          </Link>
          : ""
      }
      {
        project.appStore ?
          <Link href={project.appStore} style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={['fab', 'apple']} color="#7D7D7D" width="24" />
          </Link>
          : ""
      }
    </LinksContainer>
  )
}

export default Links;