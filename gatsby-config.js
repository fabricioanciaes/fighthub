module.exports = {
  siteMetadata: {
    title: 'Fighthub',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-preact',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Fighthub',
        short_name: 'Fighthub',
        start_url: '/',
        background_color: '#1a1c28',
        theme_color: '#33374c',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`
  ],
}
