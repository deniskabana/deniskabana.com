import { Fragment } from "react"
import { Link, Typography } from "@mui/material"
import { SOCIAL_MEDIA_LINKS } from "../../constants/socialMediaLinks"
import { styles } from "./styles"
import { FONT_WEIGHTS } from "../../styles"

const socialMediaLinks = SOCIAL_MEDIA_LINKS.map(({ href, icon: Icon, title, label }) => (
  <Fragment key={href}>
    <Link
      href={href}
      underline="always"
      key={href}
      target="_blank"
      title={title}
      className={styles.link}
    >
      <Typography variant="body2" fontWeight={FONT_WEIGHTS.bold}>
        <Icon fontSize="small" />
        {label}
      </Typography>
    </Link>

    <br />
  </Fragment>
))

export const SocialMediaLinks = () => {
  return <div className={styles.wrapper}>{socialMediaLinks}</div>
}
