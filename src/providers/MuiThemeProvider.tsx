import { ThemeProvider } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { lightTheme, darkTheme } from "@/styles/theme"

export const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const isInPrintMode = useMediaQuery("print")

  const shouldUseDarkMode = !isInPrintMode && prefersDarkMode

  return (
    <ThemeProvider theme={shouldUseDarkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
  )
}
