import styled from 'styled-components'

import colors from '../constants/colors'

const Card = styled.div`
   background-color: ${colors.CARD_BG};
   border-radius: 20px;
   padding: 0.75rem;
   margin: 2rem 0;
   box-shadow: 0px 10px 15px 0px ${colors.SHADOW};
   transition: box-shadow 250ms ease-out;
   position: relative;
   overflow: hidden;
   &:hover {
      box-shadow: 0px 15px 20px 0px ${colors.SHADOW};
   }
   &::before, &::after {
      content: "";
      position: absolute;
      height: 13px;
      width: 13px;
      border-radius: 50%;
      background-color: ${colors.TITLE};
      top: 35px;
      z-index: 1;
   }
   &::before {
      left: 35px;
   }
   &::after {
      right: 35px;
   }
`
export default Card
