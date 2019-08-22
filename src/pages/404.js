import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import notFound from '../img/notFound.png'
import SubTitle from '../components/SubTitle'

const NotFoundPage = ({ data }) => (
   <Layout bgImg={data.markdownRemark.frontmatter.backgroundImage} logo={data.markdownRemark.frontmatter.logo}>
      <Wrapper className="container">
         <img width="250" src={notFound} alt="" />
         <SubTitle>Page <span>not</span> found!</SubTitle>
         <SubTitle>Página <span>não</span> encontrada!</SubTitle>
      </Wrapper>
   </Layout>
)

export default NotFoundPage

const Wrapper = styled.div`
   display: flex;
   text-align: center;
   flex-direction: column;
   align-items: center;
   height: calc(100vh - 5rem);
   justify-content: center;
`

export const pageQuery = graphql`
   query NotFoundQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
         frontmatter {
            backgroundImage {
               publicURL
            }
            logo {
               publicURL
            }
         }
      }
   }
`
