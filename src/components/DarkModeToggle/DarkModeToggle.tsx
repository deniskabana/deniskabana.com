import { useContext, useEffect, useState } from "react"
import { Button, Typography } from "@mui/material"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import { styles } from "../../sections/Header/styles"
import { DarkModeContext } from "../../providers/MuiThemeProvider"

export const DarkModeToggle = () => {
  const { userWantsDarkMode, setUserWantsDarkMode } = useContext(DarkModeContext)
  const toggleDarkMode = () => setUserWantsDarkMode?.(!userWantsDarkMode)

  // Consistent SSG and dev SSR behavior
  const [isInitialized, setIsInitialized] = useState(false)
  useEffect(() => setIsInitialized(true), [])
  if (!isInitialized) return null

  return (
    <Button onClick={toggleDarkMode} color="inherit" className={styles.headerButton}>
      {userWantsDarkMode ? (
        <Brightness7Icon fontSize="small" />
      ) : (
        <Brightness4Icon fontSize="small" />
      )}
      <Typography variant="button" color="inherit">
        {userWantsDarkMode ? "Light Mode" : "Dark Mode"}
      </Typography>
    </Button>
  )
}
