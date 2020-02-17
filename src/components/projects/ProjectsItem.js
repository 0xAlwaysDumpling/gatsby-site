import React from "react";
import { Link } from "gatsby"
import styled from "@emotion/styled";
import Tag from "../tag";

const ProjectsItemContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.background};
  border-radius: 0.65rem;
  padding: 1.0em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: .5em;
  transition: border-width 0.6s linear;

  a {
    width: 100%;
    text-decoration: none;
    color: ${props => props.theme.buttonText};
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.buttonTextHover};
    }
    display: inline-flex;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    overflow: visible!important;
  }
`;

const ProjectsItemTitle = styled.h3`
    line-height: 1.5;
    font-size: 1.5rem;
`;

const ProjectsItemOneLiner = styled.h4`
    line-height: 1.75;
    font-size: 1.15rem;
    font-weight: 500;
`;

const TagsContainer = styled.h4`
    margin-top: 0!important;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height: 1;
    margin-bottom: 0;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-family: inherit;
    margin-left: 1.0em;
`;

const ProjectsDirectoryItem = ({ props }) => {
  const tags = props.tags.slice(0, 4);
  const remainingTags = props.tags.length - 4;
  const link = props.directLink ? props.directLink : props.slug;

  const linkChildren = <>
    <ProjectsItemTitle>{props.title}</ProjectsItemTitle>
    <TagsContainer>
      {
        tags.map((tag, i) => {
          return <Tag key={i}>{tag}</Tag>
        })
      }
      {
        remainingTags > 0 ? <Tag>{`+${remainingTags}`}</Tag> : ""
      }
    </TagsContainer>
  </>

  return (
    <ProjectsItemContainer>
      {
        props.directLink ?
          <a href={link}>{linkChildren}</a>
          :
          <Link to={link}>
            {linkChildren}
          </Link>
      }
      <ProjectsItemOneLiner>{props.oneLiner}</ProjectsItemOneLiner>
    </ProjectsItemContainer>
  )
}


export default ProjectsDirectoryItem;