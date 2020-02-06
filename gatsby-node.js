/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  const queryResults = await graphql(`
  query {
    allMdx {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }`);

  if (queryResults.error) {
    reporter.panic('Failed to create pages', queryResults.error);
  }

  const posts = queryResults.data.allMdx.nodes;
  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.frontmatter.slug
      }
    })
  })
}