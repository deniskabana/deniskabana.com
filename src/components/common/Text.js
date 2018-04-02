import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Typography from 'typography'

import globals from 'config/globals'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Source Code Pro',
      styles: [ 500 ],
    },
    {
      name: 'Source Sans Pro',
      styles: [ 700 ],
    },
    {
      name: 'Raleway',
      styles: [ 500, 600 ],
    },
  ],
  headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Georgia', 'serif'],
})

injectGlobal(typography)

export const H1 = styled.h1`
  letter-spacing: 0.8;
`

export const H2 = styled.h2`
  color: ${(props) => props.black ? globals.colorBlack : globals.colorWhite};
`
