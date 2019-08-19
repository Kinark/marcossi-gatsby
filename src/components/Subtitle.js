import styled from 'styled-components'

import colors from '../constants/colors'


const Subtitle = styled.h1`
   color: ${colors.TITLE};
   font-weight: 300;
   font-size: 28px;
   margin: 1rem 0;
   span {
      color: ${colors.ACCENT};
   }
`

export default Subtitle
