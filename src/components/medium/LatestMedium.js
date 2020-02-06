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

const LatestMediumBackgroundContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-position: 50%!important;
    background-repeat: no-repeat!important;
    background-size: cover!important;
    -webkit-transition: all .25s;
    -o-transition: all .25s;
    transition: all .25s;
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
    color: rgb(0, 0, 0);
    font-weight: 900;
    line-height: 1;
    text-align: left;
    margin-bottom: 2rem;
    margin-top: 0;
`;

const LatestMediumSubtitle = styled.h3`
    color: rgb(85, 85, 85);
    font-weight: 400;
    line-height: 1.75;
    text-align: center;
    margin: -3rem 0 2rem;
    text-align: inherit;
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
          From <span><a href={mediumUrl} style={{ 'textDecoration': 'underline', color: 'black' }}>Medium</a></span>
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