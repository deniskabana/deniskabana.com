import { ThemeOptions } from "@mui/material"
import { Raleway } from "next/font/google"

export const FontPrimary = Raleway({ subsets: ["latin", "latin-ext"], weight: ["500", "800"] })

export const fontWeight = {
  bold: 800,
  regular: 500,
}

export const fontSizes = {
  large: "1.5rem",
  largest: "2.5rem",
  medium: "1rem",
  small: "0.75rem",
  smallest: "0.5rem",
} as const

export type FontSizes = keyof typeof fontSizes

export const themeTypography: ThemeOptions["typography"] = {
  allVariants: {
    fontFamily: FontPrimary.style.fontFamily,
    fontWeight: fontWeight.regular,
    letterSpacing: "0.015em",
  },
  body1: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeight.regular,
  },
  body2: {
    fontSize: fontSizes.small,
    fontWeight: fontWeight.regular,
  },
  button: {
    fontSize: fontSizes.small,
    fontWeight: fontWeight.bold,
    textTransform: "uppercase",
  },
  fontWeightBold: fontWeight.bold,
  fontWeightRegular: fontWeight.regular,
  h1: {
    fontSize: fontSizes.largest,
    fontWeight: fontWeight.regular,
    marginBottom: "1rem",
  },
  h2: {
    fontSize: fontSizes.large,
    fontWeight: fontWeight.regular,
  },
  h3: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeight.bold,
  },
  h4: {
    fontSize: fontSizes.small,
    fontWeight: fontWeight.bold,
  },
}
