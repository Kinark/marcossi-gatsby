import styled, { css } from 'styled-components'

import colors from '../constants/colors'

const transitionDuration = '100ms';

const InputBase = css`
   display: block;
   width: 100%;
   border: solid 2px #3a386e;
   color: #3e3d5d;
   padding: 13px 25px;
   border-radius: 25px;
   margin: 0.75rem 0px;
   background: transparent;
   transition: border ${transitionDuration} ease-out, background ${transitionDuration} ease-out, box-shadow ${transitionDuration} ease-out, padding ${transitionDuration} ease-out;
   &::placeholder {
      color: ${colors.ACCENT};
   }
   &:hover {
      border-width: 3px;
      padding: 12px 24px;
   }
   &:focus {
      border-width: 0;
      padding: 15px 27px;
      background: white;
      box-shadow: 0px 10px 15px 0px ${colors.SHADOW};
      outline: none;
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
