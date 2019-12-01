var proxy = require('http-proxy-middleware')

module.exports = {
   siteMetadata: {
      title: 'Marcossi Design',
      titleEn: 'Marcossi Design',
      description: 'Marcossi Design é uma empresa de branding e desenvolvimento de aplicativos, sites e sistemas. Fazemos o que amamos!',
      descriptionEn: 'Marcossi Design is a branding and an apps, sites and systems development company. We do what we love!'
   },
   plugins: [
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            icon: `src/favicon.png`,
            name: `Marcossi Design`,
            short_name: `Marcossi Design`,
            start_url: `/`,
            background_color: `#FBFCFF`,
            theme_color: `#FBFCFF`,
            display: `standalone`
         }
      },
      'gatsby-plugin-offline',
      'gatsby-plugin-favicon',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      'gatsby-plugin-styled-components',
      {
         resolve: 'gatsby-plugin-web-font-loader',
         options: {
            typekit: {
               id: 'wbo1ihc'
            }
         }
      },
      {
         // keep as first gatsby-source-filesystem plugin for gatsby image support
         resolve: 'gatsby-source-filesystem',
         options: {
            path: `${__dirname}/static/img`,
            name: 'uploads'
         }
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            path: `${__dirname}/src/pages`,
            name: 'pages'
         }
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            path: `${__dirname}/src/img`,
            name: 'images'
         }
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
         resolve: 'gatsby-transformer-remark',
         options: {
            plugins: [
               {
                  resolve: 'gatsby-remark-relative-images',
                  options: {
                     name: 'uploads'
                  }
               },
               {
                  resolve: 'gatsby-remark-images',
                  options: {
                     // It's important to specify the maxWidth (in pixels) of
                     // the content container as this plugin uses this as the
                     // base for generating different widths of each image.
                     maxWidth: 1280
                  }
               },
               {
                  resolve: 'gatsby-remark-copy-linked-files',
                  options: {
                     destinationDir: 'static'
                  }
               }
            ]
         }
      },
      {
         resolve: 'gatsby-plugin-netlify-cms',
         options: {
            modulePath: `${__dirname}/src/cms/cms.js`
         }
      },
      {
         resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
         options: {
            develop: false, // Activates purging in npm run develop
            purgeOnly: ['/styles.scss'] // applies purging only on the bulma css file
            ignore: ['react-alice-carousel/']
         }
      }, // must be after other CSS plugins
      'gatsby-plugin-netlify' // make sure to keep it last in the array
   ],
   // for avoiding CORS while developing Netlify Functions locally
   // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
   developMiddleware: app => {
      app.use(
         '/.netlify/functions/',
         proxy({
            target: 'http://localhost:9000',
            pathRewrite: {
               '/.netlify/functions/': ''
            }
         })
      )
   }
}
