import React, { useState } from 'react'
import { elastic as Menu } from 'react-burger-menu'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '../constants/colors'

const Navbar = () => {
   const [isMenuOpen, setMenuOpen] = useState(false)

   const { markdownRemark } = useStaticQuery(graphql`
      query NavbarQuery {
         markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
               logo {
                  publicURL
               }
            }
         }
      }
   `)
   const { frontmatter } = markdownRemark
   return (
      <React.Fragment>
         <Nav>
            <div className="container">
               <Link to="/#">
                  <img src={frontmatter.logo.publicURL} width="65" alt="" />
               </Link>
               <ul className="hide-on-small-and-down">
                  <li>
                     <Link to="/#home">Início</Link>
                  </li>
                  <li>
                     <Link to="/#projects">Projetos</Link>
                  </li>
                  <li>
                     <Link to="/#findus">Nos encontre</Link>
                  </li>
                  {/* <li><Link>Depoimentos</Link></li> */}
                  <li>
                     <Link to="/#about">Sobre</Link>
                  </li>
                  <li>
                     <Link to="/#contact">Contato</Link>
                  </li>
               </ul>
            </div>
         </Nav>
         <Menu
            isOpen={isMenuOpen}
            onStateChange={state => setMenuOpen(state.isOpen)}
            styles={sidebarStyles}
            right
            pageWrapId="page-wrap"
            outerContainerId="outer-container"
         >
            <Link onClick={() => setMenuOpen(false)} to="/#home">Início</Link>
            <Link onClick={() => setMenuOpen(false)} to="/#projects">Projetos</Link>
            <Link onClick={() => setMenuOpen(false)} to="/#findus">Nos encontre</Link>
            <Link onClick={() => setMenuOpen(false)} to="/#about">Sobre</Link>
            <Link onClick={() => setMenuOpen(false)} to="/#contact">Contato</Link>
         </Menu>
      </React.Fragment>
   )
}

const Nav = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   background-color: rgba(251, 252, 255, 0.75);
   z-index: 1;
   padding: 0.75rem 0;
   .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      ul {
         margin: 0;
         padding: 0;
         list-style: none;
         li {
            list-style: none;
            display: inline-block;
            a {
               display: inline-block;
               padding: 1rem 1rem;
            }
         }
      }
   }
`

const sidebarStyles = {
   bmBurgerButton: {
      position: 'fixed',
      width: '30px',
      height: '22px',
      right: '24px',
      top: '24px'
   },
   bmBurgerBars: {
      background: colors.TITLE
   },
   bmBurgerBarsHover: {
      background: colors.BODY
   },
   bmCrossButton: {
      height: '24px',
      width: '24px'
   },
   bmCross: {
      background: colors.BG
   },
   bmMenuWrap: {
      position: 'fixed',
      height: '100%'
   },
   bmMenu: {
      background: colors.TITLE,
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
   },
   bmMorphShape: {
      fill: colors.TITLE
   },
   bmItemList: {
      color: colors.BG,
      padding: '0.8em'
   },
   bmItem: {
      display: 'block'
   },
   bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
   }
}

export default Navbar
