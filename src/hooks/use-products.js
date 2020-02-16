import { graphql, useStaticQuery } from "gatsby";

const useProducts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {frontmatter: {contentType: {eq: "Product"}}}) {
          nodes {
            id,
            frontmatter {
              title
              oneLiner
              image {
                sharp: childImageSharp {
                #   fluid(
                #     maxWidth: 50
                #     maxHeight: 50,                  
                #   ) {
                #   ...GatsbyImageSharpFluid_withWebp
                #   }
                # }
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              tags
              date
              slug
              rating
            }
          }
        }
    }
  `)

  return data.allMdx.nodes.map(product => ({
    id: product.id,
    title: product.frontmatter.title,
    oneLiner: product.frontmatter.oneLiner,
    image: product.frontmatter.image,
    rating: product.frontmatter.rating,
    tags: product.frontmatter.tags,
    date: product.frontmatter.date,
    slug: product.frontmatter.slug
  }))
}

export default useProducts;