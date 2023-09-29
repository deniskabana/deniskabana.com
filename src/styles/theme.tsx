import { ThemeOptions, createTheme, colors as muiColors } from "@mui/material"
import { colors } from "./colors"
import { themeTypography } from "./typography"

export type CheckboxLabelPlacement = "top" | "bottom" | "end" | "start"

export const drawerWidth = 280

const commonTheme: ThemeOptions = {
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          marginBottom: "2rem",
          marginTop: "2rem",
        },
      },
    },
  },
  palette: {},
  spacing: (factor: number) => `${0.25 * factor}rem`,
  typography: { ...themeTypography },
}

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    background: { default: colors.backgroundLight },
    mode: "light",
    primary: { main: muiColors.amber[500] },
  },
})

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    background: { default: colors.backgroundDark },
    mode: "dark",
    primary: { main: muiColors.amber[400] },
  },
})
