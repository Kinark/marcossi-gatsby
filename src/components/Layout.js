import React from 'react'
import { Helmet } from 'react-helmet'
import Typekit from 'react-typekit'
import styled from 'styled-components'
import './styles.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

const TemplateWrapper = ({ children }) => {
   const { markdownRemark } = useStaticQuery(graphql`
      query LayoutQuery {
         markdownRemark {
            frontmatter {
               backgroundImage {
                  publicURL
               }
            }
         }
      }
   `)
   const { title, description } = useSiteMetadata()
   return (
      <React.Fragment>
         <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />

            <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
            <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
            <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />

            <link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#ff4400" />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
         </Helmet>
         {/* <Navbar /> */}
         <React.Fragment>{children}</React.Fragment>
         <BackgroundImage>
            <img src={markdownRemark.frontmatter.backgroundImage.publicURL} alt="" />
         </BackgroundImage>
         <Typekit kitId="wbo1ihc" />
      </React.Fragment>
   )
}

const BackgroundImage = styled.div`
   position: absolute;
   left: -35%;
   right: 0;
   background-size: cover;
   z-index: -1;
   margin: auto;
   top: 19rem;
   img {
     width: 125%;
   }
`

export default TemplateWrapper
