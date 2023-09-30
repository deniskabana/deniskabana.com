import { ThemeOptions, createTheme } from "@mui/material"
import { colors } from "./colors"
import { themeTypography } from "./typography"
import { muiComponents } from "./muiComponents"

export type CheckboxLabelPlacement = "top" | "bottom" | "end" | "start"

export const drawerWidth = 280

const commonTheme: ThemeOptions = {
  components: { ...muiComponents },
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  typography: { ...themeTypography },
}

// GENERATE LIGHT AND DARK THEMES NOW

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    background: { default: colors.backgroundLight },
    mode: "light",
  },
})

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    background: { default: colors.backgroundDark },
    mode: "dark",
  },
})
