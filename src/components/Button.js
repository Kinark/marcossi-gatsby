import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import colors from '../constants/colors'

const ButtonBase = css`
   line-height: 1.25;
   text-align: center;
   background-color: ${colors.LIMA};
   color: white;
   border-radius: 15px;
   padding: 1rem 2rem;
   display: inline-block;
   margin: 1rem 1rem 1rem 0;
   cursor: pointer;
   border: none;
   font-family: inherit;
   font-weight: 500;
   font-size: 2rem;
`

export const Button = styled.button`
   ${ButtonBase}
`

export const ButtonLink = styled(Link)`
   ${ButtonBase}
`

export const ButtonAnchor = styled.a`
   ${ButtonBase}
`
