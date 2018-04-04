import React from 'react'
import styled from 'styled-components'

// Align helper
// Usage: <Align center></Align>

const Align = styled.div`
  text-align: ${(props) => {
    if (props.right) {
      return 'right'
    } else if (props.center) {
      return 'center'
    }

    return 'left'
  }}
`

export default Align
