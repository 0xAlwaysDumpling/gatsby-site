import { graphql, useStaticQuery } from "gatsby";

const useBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {frontmatter: {contentType: {eq: "Blog"}}}) {
          nodes {
            id,
            frontmatter {
              title
              date
              oneLiner
              slug
            }
          }
        }
    }
`)

  return data.allMdx.nodes.map(blogPost => ({
    id: blogPost.id,
    title: blogPost.frontmatter.title,
    date: blogPost.frontmatter.date,
    oneLiner: blogPost.frontmatter.oneLiner,
    slug: blogPost.frontmatter.slug
  }))
}

export default useBlog;