import { ThemeOptions } from "@mui/material"
import { Raleway, Poppins } from "next/font/google"

export const FontPrimary = Raleway({ subsets: ["latin", "latin-ext"], weight: ["300", "600"] })
export const FontSecondary = Poppins({ subsets: ["latin-ext"], weight: "700" })

export const fontSizes = {
  large: "1.25rem",
  largest: "2.2rem",
  medium: "1rem",
  small: "0.75rem",
  smallest: "0.5rem",
} as const

export type FontSizes = keyof typeof fontSizes

export const themeTypography: ThemeOptions["typography"] = {
  allVariants: {
    fontFamily: FontPrimary.style.fontFamily,
    fontWeight: 300,
  },
  body1: {
    fontSize: fontSizes.medium,
    fontWeight: 300,
  },
  body2: {
    fontSize: fontSizes.small,
    fontWeight: 300,
  },
  button: {
    fontSize: fontSizes.small,
    fontWeight: 600,
    textTransform: "uppercase",
  },
  fontWeightBold: 600,
  fontWeightRegular: 300,
  h1: {
    fontFamily: FontSecondary.style.fontFamily,
    fontSize: fontSizes.largest,
    fontWeight: FontSecondary.style.fontWeight,
    marginBottom: "1rem",
  },
  h2: {
    fontFamily: FontSecondary.style.fontFamily,
    fontSize: fontSizes.large,
    fontWeight: FontSecondary.style.fontWeight,
  },
  h3: {
    fontFamily: FontSecondary.style.fontFamily,
    fontSize: fontSizes.medium,
    fontWeight: FontSecondary.style.fontWeight,
  },
  h4: {
    fontFamily: FontSecondary.style.fontFamily,
    fontSize: fontSizes.small,
    fontWeight: FontSecondary.style.fontWeight,
  },
}
