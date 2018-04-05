import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import globals from 'config/globals'
import { Title } from 'components/common/Text'

// Usage <Section.Title>A title</Section.Title>

const SectionTitle = styled(Title)`
  display: block;
  text-align: center;
  margin-bottom: 80px;
  font-size: 72px;
  font-weight: 700;
  color: ${(props) => props.light ? globals.colorWhite : globals.colorBlack};
`

SectionTitle.propTypes = {
  light: PropTypes.bool,
}

SectionTitle.defaultProps = {
  light: false,
}


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

StyledSection.Title = SectionTitle

export default StyledSection
