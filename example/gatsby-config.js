module.exports = {
  siteMetadata: {
    title: "DevDoc",
    description: "Use this site to communicate the details of your API",
    author: "@garoyeri",
  },
  plugins: [
    {
      resolve: `gatsby-theme-devdoc`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-theme-devdoc-example",
        short_name: "DevDoc Example",
        start_url: "/",
        background_color: "#07C",
        theme_color: "#07C",
        display: "browser",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
  ],
};
