import { Divider, Typography, useTheme } from "@mui/material"
import { styles } from "./styles"
import { FONT_WEIGHTS } from "../../styles"

export const Footer = () => {
  const theme = useTheme()
  const year = new Date().getFullYear()

  return (
    <>
      <div className={styles.wrapper}>
        <Divider className={styles.divider(theme)} />

        <div className={styles.textContainer}>
          <Typography variant="body2" color="GrayText">
            Data shared on this site are for informational purposes and not intended for
            any entity to save, store, share or redistribute without written consent.
          </Typography>
          <Typography
            variant="body2"
            color="GrayText"
            fontWeight={FONT_WEIGHTS.bold}
            mt={3}
          >
            Designed and developed by Denis Kabana. Copyright &copy; {year} Denis Kabana.
          </Typography>
        </div>
      </div>
    </>
  )
}
