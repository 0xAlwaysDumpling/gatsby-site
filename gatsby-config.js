module.exports = {
  siteMetadata: {
    title: `Johnny's Webpage`,
    description: `blog | work | thoughts`,
    author: `Johnny Tan`,
    email: `johnny.tan.nyc@gmail.com`,
    linkedinUrl: `https://linkedin.com/in/jhnnytny`,
    mediumUsername: `tanjohnny`,
    mediumUrl: `https://medium.com/@tanjohnny`,
    githubUrl: `https://github.com/jtan25`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
