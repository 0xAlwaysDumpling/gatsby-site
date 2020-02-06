import { graphql, useStaticQuery } from "gatsby";

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {frontmatter: {contentType: {eq: "Project"}}}) {
          nodes {
            id,
            frontmatter {
              title
              oneLiner
              directLink
              tags
              date
              type
              slug
            }
          }
        }
    }
  `)

  return data.allMdx.nodes.map(project => ({
    id: project.id,
    title: project.frontmatter.title,
    oneLiner: project.frontmatter.oneLiner,
    directLink: project.frontmatter.directLink,
    tags: project.frontmatter.tags,
    date: project.frontmatter.date,
    type: project.frontmatter.type,
    slug: project.frontmatter.slug
  }))
}

export default useProjects;