import React from "react";
import styled from "@emotion/styled";
import FeaturedItem from "./FeaturedItem";
import useLatest from "../../hooks/use-latest";

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;
    padding: 6rem 1rem 0rem;
`;

const FeaturedContainer = styled.div`
    opacity: 1!important;
    transform: none!important;
    max-width: 100%;
    margin: 0 auto;
    z-index: 1;
    position: relative;
    animation: fadeFromAbove 1s;
`;

const FeaturedTitle = styled.h2`
    font-weight: 900;
    line-height: 1;
    text-align: left;
    margin-bottom: 4rem;
`;


const FeaturedItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 1100px;
  max-width: 100%;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`;


function Featured() {
  const featuredItems = useLatest();
  return (
    <Section>
      <FeaturedContainer>
        <FeaturedTitle>
          Latest updates
        </FeaturedTitle>
        <FeaturedItemsContainer>{featuredItems.map((project, i) => <FeaturedItem props={project} key={i} />)}</FeaturedItemsContainer>
      </FeaturedContainer>
    </Section>
  )
}

export default Featured;



