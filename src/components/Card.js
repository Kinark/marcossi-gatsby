import styled from 'styled-components'

import colors from '../constants/colors'

const Card = styled.div`
   background-color: ${colors.SAND};
   border-radius: 15px;
   padding: 2.5rem;
   margin: 2rem;
   transition: background-color 250ms ease-out, color 250ms ease-out;
   position: relative;
   overflow: hidden;
   color: ${colors.OCEAN};
   font-size: 1.6rem;
   &:hover {
      background-color: ${colors.LIMA};
      color: white;
   }
`
export default Card
