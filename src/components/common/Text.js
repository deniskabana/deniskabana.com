import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Typography from 'typography'

import globals from 'config/globals'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Open Sans',
      styles: [ 700 ],
    },
    {
      name: 'Raleway',
      styles: [ 500, 600 ],
    },
  ],
  bodyFontFamily: ['Raleway', 'sans-serif'],
})

// add color to body (globals.colorBlack)

injectGlobal(typography)
injectGlobal(`body {
  color: ${() => globals.colorBlack};
  font-weight: 500;
}`)

export const Title = styled.span`
  font-family: 'Open Sans', serif;
  font-size: ${(props) => props.size || '18px'};
`

export const Text = styled.span`
  font-family: 'Raleway', sans-serif;
  font-size: ${(props) => props.size || '18px'};
  font-weight: 500;
`
