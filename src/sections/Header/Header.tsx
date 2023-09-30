import { useCallback } from "react"
import { Button, Divider, Typography, useTheme } from "@mui/material"
import CloudDownloadIcon from "@mui/icons-material/CloudDownload"
import { styles } from "./styles"
import { DarkModeToggle } from "../../components/DarkModeToggle/DarkModeToggle"

export const Header = () => {
  const theme = useTheme()

  const handleDownloadClick = useCallback(() => {
    // TODO: Add download PDF functionality
  }, [])

  return (
    <div className={styles.wrapper}>
      <Button
        color="inherit"
        className={styles.headerButton}
        onClick={handleDownloadClick}
      >
        <CloudDownloadIcon fontSize="small" />
        <Typography variant="button" color="inherit">
          Download PDF
        </Typography>
      </Button>

      <Divider
        orientation="vertical"
        flexItem
        sx={{ borderColor: theme.palette.text.disabled }}
      />

      <DarkModeToggle />
    </div>
  )
}
