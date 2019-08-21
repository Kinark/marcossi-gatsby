import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MDP = ({ children, ...rest }) => <MDPWrapper dangerouslySetInnerHTML={{ __html: children }} {...rest} />

const MDPWrapper = styled.p`
   white-space: pre-line;
`

MDP.propTypes = {
   children: PropTypes.node.isRequired
}

export default MDP
