import React from "react";
import { Link } from "gatsby"
import styled from "@emotion/styled";
import Links from "../links";
import Tag from "../tag";

const FeaturedItemContainer = styled.div`
  background-color: 'white';
  opacity: 1!important;
  transform: none!important;
  overflow: visible;
  flex-basis: calc(50% - 1rem);
  transition-timing-function: ease;
  transition-duration: 1.5s;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  text-align: left;
  overflow: visible!important;
  margin-bottom: 5rem;
  &:first-of-type {
    margin-right: 2rem;
  }
  &:last-of-type {
    margin-right: 0;
    margin-top: 0;
  }
  @media only screen and (max-width: 600px) {
    flex-basis : 100%;
  }
`;

const FeaturedItemHeader = styled.div`
    display: flex;
    height: auto;
    overflow: visible;
`;


const FeaturedItemIcon = styled.span`
    width: 3.12rem;
    height: 3.12rem;
    border-radius: 16%;
    display: inline-block;
    width: 56px;
    height: 56px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    border-radius: 4px;
    margin-right: 16px;
    flex-shrink: 0;
    -webkit-box-shadow: 0 2px 4px 0 rgba(136,144,195,.2), 0 5px 15px 0 rgba(37,44,97,.15);
    box-shadow: 0 2px 4px 0 rgba(136,144,195,.2), 0 5px 15px 0 rgba(37,44,97,.15);
    background-image: url(${props => props.url});
`;

const FeaturedItemLogo = styled.img`
    src: (${props => props.url});
    height: auto; 
    width: auto; 
    max-width: 200px; 
    max-height: 200px;
`;

const FeaturedItemTitle = styled.h4`
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 2px;
`;

const FeaturedItemTagsContainer = styled.h4`
    max-width: 100%;
    margin-top: 0!important;
    user-select: none;
    line-height: 1;
    margin-bottom: 0;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-family: inherit;
`;


const FeaturedItemSummary = styled.p`
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.75 !important;
    max-width: 400px;
    color: inherit;
    white-space: pre-wrap;
    line-height: inherit;
    overflow: hidden;
    text-align: left;
`;




const FeaturedItem = ({ props }) => {
  const tags = props.tags.slice(0, 2);
  const remainingTags = props.tags.length - 2;
  return (
    <FeaturedItemContainer>
      {props.logo ? <FeaturedItemLogo src={props.logo} /> : ""}
      <FeaturedItemHeader>
        {props.icon ? <FeaturedItemIcon url={props.icon} /> : ""}
        <div style={{ marginTop: '-1.5rem' }}>
          <FeaturedItemTitle>{props.title}</FeaturedItemTitle>
          <FeaturedItemTagsContainer>
            {
              tags.map((tag, i) => {
                return <Tag key={i}>{tag}</Tag>
              })
            }
            {
              remainingTags > 0 ? <Tag>{`+${remainingTags}`}</Tag> : ""
            }
          </FeaturedItemTagsContainer>
        </div>
      </FeaturedItemHeader>

      <FeaturedItemSummary>
        {props.summary}
        <br />
        {props.directLink ? <a href={props.directLink}>More</a> : <Link to={props.slug}>More</Link>}
      </FeaturedItemSummary>

      <Links project={props} />
    </FeaturedItemContainer>
  )

}

export default FeaturedItem;
