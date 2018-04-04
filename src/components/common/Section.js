import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import globals from 'config/globals'

// Section wrapper
// Usage <Section dark></Section>

const StyledSection = styled.section`
  display: block;
  padding: 140px 0;
  background-color: ${(props) => props.dark ? globals.colorGray : globals.colorWhite};
`

StyledSection.propTypes = {
  dark: PropTypes.bool,
}

StyledSection.defaultProps = {
  dark: false,
}

export default StyledSection
