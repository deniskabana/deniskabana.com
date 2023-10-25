import { ThemeOptions } from "@mui/material"
import { Barlow as Font } from "next/font/google"

export const FontPrimary = Font({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "800"],
})

export const FONT_WEIGHTS = {
  bold: 800,
  regular: 500,
}

export const FONT_SIZES = {
  large: "1.5rem",
  largest: "2.5rem",
  medium: "1rem",
  small: "0.75rem",
  smallest: "0.6rem",
} as const

export type FontSizes = keyof typeof FONT_SIZES

export const themeTypography: ThemeOptions["typography"] = {
  allVariants: {
    fontFamily: FontPrimary.style.fontFamily,
    fontWeight: FONT_WEIGHTS.regular,
    letterSpacing: "0.025rem",
  },
  body1: {
    fontSize: FONT_SIZES.medium,
    fontWeight: FONT_WEIGHTS.regular,
  },
  body2: {
    fontSize: FONT_SIZES.small,
    fontWeight: FONT_WEIGHTS.regular,
  },
  button: {
    fontSize: FONT_SIZES.small,
    fontWeight: FONT_WEIGHTS.bold,
    textTransform: "uppercase",
  },
  fontWeightBold: FONT_WEIGHTS.bold,
  fontWeightRegular: FONT_WEIGHTS.regular,
  h1: {
    fontSize: FONT_SIZES.largest,
    fontWeight: FONT_WEIGHTS.regular,
    marginBottom: "0.5rem",
  },
  h2: {
    fontSize: FONT_SIZES.large,
    fontWeight: FONT_WEIGHTS.regular,
  },
  h3: {
    fontSize: FONT_SIZES.medium,
    fontWeight: FONT_WEIGHTS.bold,
  },
  h4: {
    fontSize: FONT_SIZES.small,
    fontWeight: FONT_WEIGHTS.bold,
  },
}
