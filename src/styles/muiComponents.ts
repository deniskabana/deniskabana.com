import { ThemeOptions } from "@mui/material"

export const muiComponents: ThemeOptions["components"] = {
  MuiContainer: {
    defaultProps: {
      maxWidth: "md",
    },
    styleOverrides: {
      root: {
        paddingLeft: "2rem",
        paddingRight: "2rem",
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        marginBottom: "2rem",
        marginTop: "2rem",
      },
    },
  },
  MuiLink: {
    defaultProps: {
      color: "secondary",
    },
  },
}
