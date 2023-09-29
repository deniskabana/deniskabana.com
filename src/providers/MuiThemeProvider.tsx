import { ThemeProvider } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { lightTheme, darkTheme } from "@/styles/theme"

export const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  return <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
}
