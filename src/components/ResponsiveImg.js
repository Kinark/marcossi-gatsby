import styled from 'styled-components';

const ResponsiveImg = styled.img`
   width: 90%;
   max-width: ${({maxWidth}) => maxWidth ? `${maxWidth}px` : 'auto'};
   display: ${({inline}) => inline ? 'inline-block' : 'block'};
   margin: auto;
`

export default ResponsiveImg
