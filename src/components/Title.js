import styled from 'styled-components'

import colors from '../constants/colors'

const Title = styled.h1`
   color: ${colors.OCEAN};
   font-weight: ${({ bolder }) => (bolder ? 500 : 300)};
   font-size: 4rem;
   word-break: break-word;
   margin: 1rem 0;
   /* @media (max-width: 767px) {
      font-size: 2.2rem;
   } */
`

export default Title
