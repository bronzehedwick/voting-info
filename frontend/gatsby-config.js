module.exports = {
  siteMetadata: {
    title: `Astorians' Voting Guide 2020`,
    description: `Register to vote!`,
    author: `astoria.digital`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `astorians-voting-guide-2020`,
        short_name: `voting-guide`,
        start_url: `/`,
        background_color: `#6D3C7E`,
        theme_color: `#6D3C7E`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
