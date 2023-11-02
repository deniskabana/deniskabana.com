import { Typography, useTheme } from "@mui/material"
import Image from "next/image"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import { styles } from "./styles"

export const ProfilePhoto = () => {
  const theme = useTheme()

  return (
    <>
      <Image
        className={styles.profilePicture(theme.palette.primary.main)}
        src="/images/profile-photo.jpg"
        alt="Profile photo"
        width={260}
        height={260}
        priority={true}
      />

      <Typography variant="body2" className={styles.location}>
        <LocationOnOutlinedIcon fontSize="medium" color="primary" />
        <span>
          <strong>Prague</strong>
          <br />
          <Typography
            variant="body2"
            display="inline"
            color={theme.palette.text.disabled}
          >
            Czech republic
          </Typography>
        </span>
      </Typography>

      <div className={styles.divider}></div>

      <Typography variant="body2" className={styles.location}>
        <strong>Let&rsquo;s get in touch!</strong>
      </Typography>

      <Typography
        variant="body2"
        className={styles.contact}
        color={theme.palette.primary.main}
      >
        denis.kabana@gmail.com
      </Typography>
      <Typography
        variant="body2"
        className={styles.contact}
        color={theme.palette.primary.main}
      >
        +420 720 062 021
      </Typography>
    </>
  )
}
