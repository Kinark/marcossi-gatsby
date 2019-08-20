import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const MDP = ({children}) => <MDPWrapper dangerouslySetInnerHTML={{__html: children}} />

const MDPWrapper = styled.p`
   white-space: pre-line;
`;

MDP.propTypes = {
   children: PropTypes.node.isRequired
}

export default MDP