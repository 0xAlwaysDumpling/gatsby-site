import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import MediumCard from './MediumCard';
import { useStaticQuery, graphql } from "gatsby"


const N = 2;

const Section = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin: 0;
    padding: 6rem 1rem;
    justify-content: center;
    -ms-flex-pack: center;
    -ms-flex-align: center;
`;


const LatestMediumContainer = styled.div`
    text-align: center;
    width: 1100px;
    transform: none!important;
    opacity: 1!important;
    max-width: 100%;
    margin: 0 auto;
    z-index: 1;
    position: relative;
`;

const LatestMediumTitle = styled.h2`
    font-weight: 900;
    line-height: 1;
    text-align: left;
    margin-bottom: 2rem;
    margin-top: 0;
    color: ${props => props.theme.text};
`;

const LatestMediumTitleLink = styled.a`
  text-decoration: 'underline';
  color: ${props => props.theme.buttonText};
`;

const LatestMediumArticlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 1100px;
  max-width: 100%;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`;

function LatestMedium() {
  const [latestMediumArticles, setMediumArticles] = useState([]);
  const userInfo = useStaticQuery(graphql`
  query SiteMetaDataUserMedium {
    site {
      siteMetadata {
        mediumUsername,
        mediumUrl,
        }
      }
    }
  `)
  const { mediumUsername, mediumUrl } = userInfo.site.siteMetadata;;

  useEffect(() => {
    async function fetchMediumData() {
      fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`)
        .then((res) => res.json())
        .then((data) => {
          //Do things
          const res = data.items;
          const recentN = res.slice(0, N);
          setMediumArticles(recentN);
        })
        .catch(() => setMediumArticles([]))
    }
    fetchMediumData();
  }, [mediumUsername, mediumUrl]);

  return (
    <Section>
      <LatestMediumContainer>
        <LatestMediumTitle>
          From <span><LatestMediumTitleLink href={mediumUrl}>Medium</LatestMediumTitleLink></span>
        </LatestMediumTitle>
        <LatestMediumArticlesContainer>
          {
            latestMediumArticles.map((mediumArticle, i) => {
              return <MediumCard key={i} props={mediumArticle} />
            })
          }
        </LatestMediumArticlesContainer>
      </LatestMediumContainer>
    </Section>
  );
}

export default LatestMedium;