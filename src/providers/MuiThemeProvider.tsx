import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react"
import { ThemeProvider } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { lightTheme, darkTheme } from "@/styles/theme"

// DARK MODE CONTEXT
// --------------------------------------------------
interface IDarkModeContext {
  setUserWantsDarkMode: Dispatch<SetStateAction<boolean | null>> | null
  userWantsDarkMode: boolean | null
}

export const DarkModeContext = createContext<IDarkModeContext>({
  setUserWantsDarkMode: null,
  userWantsDarkMode: false,
})

// COMBINED PROVIDER
// --------------------------------------------------
export const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const osPrefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const isInPrintMode = useMediaQuery("print")

  /*
   * This is the reason why DarkModeContext was combined with MuiThemeProvider.
   */
  const [userWantsDarkMode, setUserWantsDarkMode] = useState<boolean | null>(null)
  // const [userWantsDarkMode, setUserWantsDarkMode] = usePersistentState(
  //   null,
  //   "ui/userWantsDarkMode",
  //   { storageType: "session" },
  // )

  // Protection for prioritized print override
  let prefersDarkMode = userWantsDarkMode
  if (userWantsDarkMode === null) prefersDarkMode = osPrefersDarkMode
  if (userWantsDarkMode !== null) prefersDarkMode = userWantsDarkMode
  if (isInPrintMode) prefersDarkMode = false

  // Consistent SSG and dev SSR behavior
  const [isInitialized, setIsInitialized] = useState(false)
  useEffect(() => setIsInitialized(true), [])
  if (!isInitialized) return null

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <DarkModeContext.Provider
        value={{ setUserWantsDarkMode, userWantsDarkMode: prefersDarkMode }}
      >
        {children}
      </DarkModeContext.Provider>
    </ThemeProvider>
  )
}
