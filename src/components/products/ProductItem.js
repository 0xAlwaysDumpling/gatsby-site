import React from "react";
import { Link } from "gatsby"
import styled from "@emotion/styled";
import Tag from "../tag";
import Image from "gatsby-image";


const ProductItemContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin-top: 10px;
  background-color: white;
  border-radius: 0.65rem;
  padding: 1.0em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: border-width 0.6s linear;
  a {
    width: 100%;
    text-decoration: none;
    color: black;
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
  display: flex;
  flex-direction: column;

`;

const ProductItemTitle = styled.h3`
    line-height: 1.5;
    font-size: 1.5rem;

`;

const ProductItemOneLiner = styled.h4`
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
`;


const ProductItem = ({ props }) => {
  const tags = props.tags.slice(0, 4);
  const remainingTags = props.tags.length - 4;

  return (
    <ProductItemContainer>
      <Link to={props.slug}>
        <Image fluid={props.image.sharp.fluid} style={{ maxHeight: 'calc(50vh - 4rem)' }}
          imgStyle={{ objectFit: 'contain' }} alt={props.title} />
        <ProductItemTitle>{props.title}</ProductItemTitle>
        <TagsContainer>
          {
            tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)
          }
          {
            remainingTags > 0 ? <Tag>{`+${remainingTags}`}</Tag> : ""
          }
        </TagsContainer>
        <ProductItemOneLiner>{props.oneLiner}</ProductItemOneLiner>
      </Link>
    </ProductItemContainer>
  )
}


export default ProductItem;