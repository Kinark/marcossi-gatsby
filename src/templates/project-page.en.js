import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Project from '../components/Project'

export default class ProjectPage extends PureComponent {
   render() {
      const { markdownRemark, indexMarkdownRemark } = this.props.data
      const { frontmatter } = markdownRemark
      const { frontmatter: indexFrontmatter } = indexMarkdownRemark
      return (
         <Layout i18n="en" bgImg={indexFrontmatter.backgroundImage} logo={indexFrontmatter.logo}>
            <Project data={frontmatter} />
         </Layout>
      )
   }
}

export const pageQuery = graphql`
   query ProjectEnByID($id: String!) {
      indexMarkdownRemark: markdownRemark(frontmatter: { templateKey: { eq: "index-page.en" } }) {
         frontmatter {
            backgroundImage {
               publicURL
            }
            logo {
               publicURL
            }
         }
      }

      markdownRemark(id: { eq: $id }) {
         frontmatter {
            title: titleEn
            excerpt: excerptEn
            description: descriptionEn
            date(formatString: "MMMM DD, YYYY")
            featuredimage {
               childImageSharp {
                  fluid(maxWidth: 1080, quality: 75) {
                     ...GatsbyImageSharpFluid
                  }
               }
               publicURL
            }
            externalLink
            gallery {
               image {
                  childImageSharp {
                     fluid(maxWidth: 1280, quality: 75) {
                        ...GatsbyImageSharpFluid
                     }
                  }
                  publicURL
               }
               label
            }
         }
      }
   }
`
