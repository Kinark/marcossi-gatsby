const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
   const { createPage } = actions

   return graphql(`
      {
         allMarkdownRemark(limit: 1000) {
            edges {
               node {
                  id
                  fields {
                     slug
                  }
                  frontmatter {
                     templateKey
                     templateKeyEn
                  }
               }
            }
         }
      }
   `).then(result => {
      if (result.errors) {
         result.errors.forEach(e => console.error(e.toString()))
         return Promise.reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges

      const i18nSlugToPathTranslator = slug => {
         if (slug === '/' || slug === '/index/') return '/'
         const transformedSlug = slug.slice(1, -1)
         const slugSplitted = transformedSlug.split('.')
         const indexOfWordIndex = slugSplitted.indexOf('index')
         if (indexOfWordIndex !== -1) slugSplitted.splice(indexOfWordIndex, 1)
         if (slugSplitted.length === 1) return `/${slugSplitted[0]}/`
         return `/${slugSplitted.pop()}/${slugSplitted.join('.')}/`
      }

      posts.forEach(edge => {
         const id = edge.node.id
         createPage({
            path: i18nSlugToPathTranslator(edge.node.fields.slug),
            component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
            // additional data can be passed via context
            context: {
               id
            }
         })
         if (edge.node.frontmatter.templateKeyEn) {
            createPage({
               path: `/en${edge.node.fields.slug}`,
               component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKeyEn)}.js`),
               // additional data can be passed via context
               context: {
                  id
               }
            })
         }
      })
   })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
   const { createNodeField } = actions
   fmImagesToRelative(node) // convert image paths for gatsby images

   if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode })
      createNodeField({
         name: `slug`,
         node,
         value
      })
   }
}
