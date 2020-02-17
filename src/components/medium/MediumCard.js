import React from "react";
import styled from "@emotion/styled";
import ReactHtmlParser from "react-html-parser";


const MediumCardContainer = styled.div`
    opacity: 1!important;
    transform: none!important;
    overflow: visible;
    flex-basis: calc(50% - 1rem);
    flex-grow: 0;
    flex-shrink: 0;
    margin-bottom: 2rem;
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

const MediumCardLink = styled.a`
    color: rgb(0, 0, 0);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    text-align: left;
    cursor: pointer;
    text-decoration: none;
`;

const MediumCardTitle = styled.h4`
    color: ${props => props.theme.text};
    font-weight: 700;
    line-height: 1.5;
    text-align: left;
    margin-bottom: .5rem;
    margin-top: 0;
`;

const MediumCardDescription = styled.p`
    color: ${props => props.theme.text};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    
    a {
     color: ${props => props.theme.text};
    }
`;

const MediumCardImage = styled.div`
    background-image: url(${props => props.url});
    border-radius: 0px;
    border-width: 1px;
    border-color: rgb(221, 221, 221);
    width: 100%;
    padding-top: 53%;
    background-position: 50%!important;
    background-repeat: no-repeat!important;
    background-size: cover!important;
    margin-bottom: 1rem;
    border: 1px solid #d3d3d3;
`;


const MediumCard = ({ props }) => {
  return (
    <MediumCardContainer>
      {
        !props.thumbnail.startsWith('https://medium.com/') ? <MediumCardImage url={props.thumbnail} /> : ""
      }
      <MediumCardLink href={props.link}>
        <MediumCardTitle>
          {props.title}
        </MediumCardTitle>
      </MediumCardLink>
      <MediumCardDescription>
        {(ReactHtmlParser(props.description)[0])}
      </MediumCardDescription>
    </MediumCardContainer>
  )
}

export default MediumCard;