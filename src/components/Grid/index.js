import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './bootstrap.min.css'

// Super simple grid

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const StyledCol = styled.div`
  float: none;
  flex: 1 1 auto;
`

export const Row = ({ children }) => (
  <StyledRow className="row">{children}</StyledRow>
)

const Col = ({ xs, sm, md, lg, children }) => (
  <StyledCol className={`col-xs-${xs} col-sm-${sm} col-md-${md} cold-lg-${lg}`}>{children}</StyledCol>
)

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
}

Col.defaultProps = {
  xs: 12,
}

export { Col as Col }
