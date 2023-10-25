import { Container, Divider, Typography, useTheme } from "@mui/material"
import { styles } from "./styles"
import { FONT_WEIGHTS } from "../../styles"
import { SocialMediaLinks } from "../../components/intro/SocialMediaLinks/SocialMediaLinks"

export const Footer = () => {
  const theme = useTheme()
  const year = new Date().getFullYear()

  return (
    <Container className={styles.footer}>
      <Typography variant="body1" color={theme.palette.text.disabled} align="center">
        More to learn about me:
      </Typography>
      <SocialMediaLinks />

      <div className={styles.wrapper}>
        <Divider className={styles.divider(theme)} />

        <div className={styles.textContainer}>
          <Typography
            variant="body2"
            color={theme.palette.text.disabled}
            className={styles.gdprWarning}
          >
            This site contains <strong>private&nbsp;information</strong>. By publishing
            this information on this site, I do <strong>not&nbsp;consent</strong> anyone
            to use or process them. Any attempt to use or process data provided without
            written consent will be pursued to the full extent of law as described in
            Regulation (EU) 2016/679 (General Data Protection Regulation).
          </Typography>
          <Typography variant="body2" fontWeight={FONT_WEIGHTS.bold} mt={3}>
            Designed and developed by Denis Kabana &copy; {year}
          </Typography>
        </div>
      </div>
    </Container>
  )
}
