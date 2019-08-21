var proxy = require('http-proxy-middleware')

module.exports = {
   siteMetadata: {
      title: 'Gatsby + Netlify CMS Starter',
      description:
         'This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.'
   },
   plugins: [
      {
         // keep as first gatsby-source-filesystem plugin for gatsby image support
         resolve: 'gatsby-source-filesystem',
         options: {
            path: `${__dirname}/static/img`,
            name: 'assets'
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
      {
         resolve: 'gatsby-transformer-remark',
         options: {
            plugins: [
               {
                  resolve: 'gatsby-remark-relative-images',
                  options: {
                     name: 'assets'
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
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
         resolve: 'gatsby-plugin-netlify-cms',
         options: {
            modulePath: `${__dirname}/src/cms/cms.js`
         }
      },
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
         resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
         options: {
            develop: false, // Activates purging in npm run develop
            purgeOnly: ['/styles.scss'] // applies purging only on the bulma css file
         }
      }, // must be after other CSS plugins
      'gatsby-plugin-react-helmet',
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
