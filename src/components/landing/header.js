import React from "react";
import SocialMediaLinks from '../social/SocialMediaLinks';
import styled from "@emotion/styled";


const AboutContainer = styled.div`
  background: white;
  max-width: 100%;
  z-index: 1;
  animation: 'fadeFromAbove' 1s ease 0s 1 normal none;
`;

const AboutName = styled.h1`
  font-weight: 900;
  line-height: 1.5;
  text-align: center;
  margin-bottom: .5rem;
  color: ${props => props.theme.black};
`;


const AboutDescriptionContainer = styled.div`
    font-weight: 400;
    line-height: 1.75;
    text-align: center;
    color: ${props => props.theme.black};
    margin-top: 2rem;
    display: block;
    max-width: 100%;
`;

const AboutDescription = styled.div`
    max-width: 570px;
    color: inherit;
    white-space: pre-wrap;
    line-height: inherit;
    display: inline-block;
`;

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;
    -ms-flex-pack: center;
    -ms-flex-align: center;
`;


const About = () => {
  return (
    <Section>
      <AboutContainer>
        <AboutName>Hello <span role="img">👋</span> I'm Johnny.</AboutName>
        <AboutDescriptionContainer>
          <AboutDescription>
            I am a product focused software developer who spends too much time  💤 & 🔨.
          </AboutDescription>
        </AboutDescriptionContainer>
        <SocialMediaLinks/>
    </AboutContainer>
  </Section>
  )
}

export default About;
