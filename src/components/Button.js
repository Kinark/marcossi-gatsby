import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import colors from '../constants/colors'

const ButtonBase = css`
   background-color: ${colors.TITLE};
   color: ${colors.BG};
   border-radius: 100px;
   padding: calc(0.75rem - 3px) 2rem 0.75rem;
   display: inline-block;
   margin: 1rem 0;
   box-shadow: 0px 10px 15px 0px ${colors.SHADOW};
   transition: color 250ms ease-out, background-color 250ms ease-out, box-shadow 250ms ease-out;
   cursor: pointer;
   border: none;
   font-family: inherit;
   &:hover {
      color: ${colors.TITLE};
      background-color: ${colors.CARD_BG};
      box-shadow: 0px 15px 20px 0px ${colors.SHADOW};
   }
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
