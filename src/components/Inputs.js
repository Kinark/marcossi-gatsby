import styled, { css } from 'styled-components'

import colors from '../constants/colors'

const InputBase = css`
   display: block;
   width: 100%;
   border: none;
   border-bottom: solid 1px ${colors.OCEAN};
   color:  ${colors.OCEAN};
   padding: 13px 25px;
   margin: 1rem 0px;
   background: transparent;
   font-size: 2.4rem;
   font-weight: 300;
   font-family: 'soleil', sans-serif;
   margin-bottom: calc(1rem + 1px);
   &::placeholder {
      color: ${colors.ACCENT};
   }
   &:hover, &:focus {
      border-width: 2px;
      outline: none;
      margin-bottom: 1rem;
   }
`

export const Input = styled.input`
   ${InputBase}
`
export const Textarea = styled.textarea`
   ${InputBase}
   resize: vertical;
   min-height: 10rem;
`
