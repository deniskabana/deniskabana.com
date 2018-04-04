import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Typography from 'typography'

import globals from 'config/globals'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: [ 700 ],
    },
    {
      name: 'Raleway',
      styles: [ 500, 600 ],
    },
  ],
  bodyFontFamily: ['Raleway', 'sans-serif'],
})

injectGlobal(typography)

export const Title = styled.span`
  font-family: 'Source Sans Pro', serif;
  font-size: ${(props) => props.size || '18px'};
`

export const Text = styled.span`
  font-family: 'Raleway', sans-serif;
  font-size: ${(props) => props.size || '18px'};
`
