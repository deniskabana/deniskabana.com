import { ThemeOptions } from "@mui/material"
import { FONT_WEIGHTS } from "./typography"

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
    defaultProps: {
      sx(theme) {
        return {
          borderColor: theme.palette.primary.main,
        }
      },
    },
    styleOverrides: {
      root: {
        background: "transparent",
        borderBottomWidth: "0.15rem",
        borderTopWidth: 0,
        display: "block",
        marginBottom: "0.5rem",
        marginLeft: 0,
        marginRight: 0,
        marginTop: "0.5rem",
      },
    },
  },
  MuiLink: {
    defaultProps: {
      color: "secondary",
      sx: {
        fontWeight: FONT_WEIGHTS.bold,
      },
    },
  },
}
