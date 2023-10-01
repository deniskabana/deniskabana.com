import { Typography } from "@mui/material"
import { styles } from "./styles"
import { FONT_WEIGHTS } from "../../styles"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <Typography variant="body2" fontWeight={FONT_WEIGHTS.bold} mb={1.5}>
            Copyright &copy; {year} Denis Kabana.
          </Typography>
          <Typography variant="body2" color="GrayText">
            Data shared on this site are for informational purposes and not intended for
            any entity to save, store, share or redistribute without written consent.
          </Typography>
        </div>
      </div>
    </>
  )
}
