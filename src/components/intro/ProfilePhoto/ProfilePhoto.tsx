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
          Czech republic
        </span>
      </Typography>
    </>
  )
}
