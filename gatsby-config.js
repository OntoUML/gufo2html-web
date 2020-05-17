require('dotenv').config({ path: '.env' })

const plugins = [
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
      name: `gUFO to HTML | OntoUML`,
      short_name: `gUFO to HTML`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#2a4089`,
      display: `minimal-ui`,
      icon: `src/images/favicon.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        '@components': 'src/components',
        '@layout': 'src/layout',
        '@templates': 'src/pages_templates',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
      },
      extensions: ['tsx'],
    },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Roboto`,
          variants: [`300`, `400`, `500`, `700`],
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-material-ui`,
    options: {
      stylesProvider: {
        injectFirst: true,
      },
    },
  },
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-tslint`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
]

if (process.env.NODE_ENV === 'production') {
  // const analytics = {
  //   resolve: `gatsby-plugin-google-analytics`,
  //   options: {
  //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
  //     head: false,
  //   },
  // }
  // plugins.push(`gatsby-plugin-offline`)
}

module.exports = {
  siteMetadata: {
    title: `gUFO to HTML`,
    description: `gUFO to HTML `,
    author: `@ontouml`,
    siteUrl: 'https://ontouml.github.io/gufo2html/',
  },
  plugins,
}
