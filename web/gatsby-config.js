module.exports = {
  siteMetadata: {
    title: `Reconnect Earth`,
    description: `Reconnect Earth works for a socially and ecologically just future by fostering and growing a network of empowered young leaders to sustain grassroots social movements for years to come.`,
    author: `Reconnect Earth`,
    menuLinks: [
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Contribute",
        link: "/contribute",
      },
      {
        name: "Field Notes",
        link: "/field-notes",
      },
      {
        name: "Trips",
        link: "/trips",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "bp91dgrn",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
