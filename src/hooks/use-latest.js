import { graphql, useStaticQuery } from "gatsby";

const useLatest = () => {
  const data = useStaticQuery(graphql`
  query {
    allMdx(limit: 2, sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          id,
          frontmatter {
            title
            oneLiner
            directLink
            summary
            tags
            date
            contentType
            website
            playStore
            appStore
            icon
            logo
            slug
          }
        }
      }
    }  
`)

  return data.allMdx.nodes.map(node => ({
    id: node.id,
    title: node.frontmatter.title,
    oneLiner: node.frontmatter.oneLiner,
    directLink: node.frontmatter.directLink,
    tags: node.frontmatter.tags,
    date: node.frontmatter.date,
    contentType: node.frontmatter.contentType,
    website: node.frontmatter.website,
    playStore: node.frontmatter.playStore,
    appStore: node.frontmatter.appStore,
    icon: node.frontmatter.icon,
    logo: node.frontmatter.logo,
    summary: node.frontmatter.summary,
    slug: node.frontmatter.slug
  }))
}

export default useLatest;