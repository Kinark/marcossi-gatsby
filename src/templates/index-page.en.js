import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Introduction from '../components/indexComponents/Introduction'
import WhatWeDo from '../components/indexComponents/WhatWeDo'
import Values from '../components/indexComponents/Values'
import Projects from '../components/indexComponents/Projects'
import FindUs from '../components/indexComponents/FindUs'
// import Testimonials from '../components/indexComponents/Testimonials'
import About from '../components/indexComponents/About'
import Contact from '../components/indexComponents/Contact'

export default class IndexPageTemplate extends PureComponent {
   render() {
      const { markdownRemark, allMarkdownRemark } = this.props.data
      const { frontmatter } = markdownRemark
      const { edges: projects } = allMarkdownRemark
      return (
         <Layout i18n="en" bgImg={frontmatter.backgroundImage} logo={frontmatter.logo}>
            <Introduction data={frontmatter.introduction} logo={frontmatter.logo} />
            <WhatWeDo data={frontmatter.whatWeDo} />
            <Values data={frontmatter.values} />
            <Projects data={frontmatter.projectsTitle} projects={projects} />
            <FindUs data={frontmatter.whereWeAre} />
            <About data={frontmatter.about} logo={frontmatter.logo} />
            <Contact data={frontmatter.contact} />
         </Layout>
      )
   }
}

export const pageQuery = graphql`
   query IndexEnQueryDefault($id: String!) {
      allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "project-page" } } }) {
         edges {
            node {
               frontmatter {
                  featuredimage {
                     childImageSharp {
                        fluid(maxWidth: 1080, quality: 75) {
                           ...GatsbyImageSharpFluid
                        }
                     }
                     publicURL
                  }
                  title: titleEn
                  excerpt: excerptEn
                  externalLink
               }
               fields {
                  slug
               }
            }
         }
      }

      markdownRemark(id: { eq: $id }) {
         frontmatter {
            backgroundImage {
               publicURL
            }
            logo {
               publicURL
            }
            introduction {
               image {
                  publicURL
               }
               description
               name
               subtitle
            }
            whatWeDo {
               title
               feature1 {
                  image {
                     publicURL
                  }
                  title
                  description
               }
               feature2 {
                  image {
                     publicURL
                  }
                  title
                  description
               }
               feature3 {
                  image {
                     publicURL
                  }
                  title
                  description
               }
            }
            values {
               value1 {
                  image {
                     publicURL
                  }
                  title
                  description
               }
               value2 {
                  image {
                     publicURL
                  }
                  title
                  description
               }
               value3 {
                  image {
                     publicURL
                  }
                  title
                  description
               }
            }
            projectsTitle
            whereWeAre {
               addressLabel
               addressLine1
               addressLine2
               coords
               description
               title
               image {
                  publicURL
               }
            }
            about {
               description
               sectionTitle
               title
               section1 {
                  description
                  title
                  image {
                     publicURL
                  }
               }
               section2 {
                  image {
                     publicURL
                  }
                  title
                  description
               }
               section3 {
                  description
                  title
                  image {
                     publicURL
                  }
               }
            }
            contact {
               image {
                  publicURL
               }
               title
               nameLabel
               emailLabel
               messageLabel
            }
         }
      }
   }
`
