import { Button, Divider, Typography, useTheme } from "@mui/material"
import CloudDownloadIcon from "@mui/icons-material/CloudDownload"
import GitHubIcon from "@mui/icons-material/GitHub"
import { styles } from "./styles"
import { DarkModeToggle } from "../../components/DarkModeToggle/DarkModeToggle"

export const Header = () => {
  const theme = useTheme()

  return (
    <div className={styles.wrapper}>
      <Button color="inherit" className={styles.headerButton}>
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

      <Button color="inherit" className={styles.headerButton}>
        <GitHubIcon fontSize="small" />
        <Typography variant="button" color="inherit">
          Source code
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
