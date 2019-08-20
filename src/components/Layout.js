import React from 'react'
import { Helmet } from 'react-helmet'
import Typekit from 'react-typekit'
import styled, { createGlobalStyle } from 'styled-components'
import { withPrefix, graphql, useStaticQuery } from 'gatsby'

import colors from '../constants/colors'

import './styles.scss'
import useSiteMetadata from './SiteMetadata'

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
         <Typekit kitId="wbo1ihc" />
         <GlobalStyle bgImg={markdownRemark.frontmatter.backgroundImage.publicURL} />
      </React.Fragment>
   )
}

const GlobalStyle = createGlobalStyle`
  body {
   font-family: soleil, sans-serif;
   color: ${colors.BODY};
   font-size: 16px;
   background-color: ${colors.BG};
   background-image: url(${({ bgImg }) => bgImg});
   background-position: center 320px;
   background-repeat: no-repeat;
  }
`

export default TemplateWrapper
