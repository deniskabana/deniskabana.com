import { Divider, Typography, useTheme } from "@mui/material"
import Image from "next/image"

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"

import { styles } from "./styles"
import { SocialMediaLinks } from "../../components/SocialMediaLinks/SocialMediaLinks"

export const Intro = () => {
  const theme = useTheme()

  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridColumnLeft}>
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
      </div>

      <div className={styles.gridColumnRight}>
        <div>
          <Typography variant="h1">
            Denis&nbsp;
            <Typography
              component="span"
              variant="h1"
              fontWeight={600}
              color={theme.palette.primary.main}
            >
              Kabana
            </Typography>
          </Typography>

          <Divider />

          <Typography variant="body1" color={theme.palette.text.disabled}>
            Senior Frontend Engineer ・ Lead ・ Mentor
          </Typography>

          <br />

          <Typography variant="body2" textAlign="justify">
            <strong>Turpis, sit amet iaculis dui consectetur at.</strong> Cras sagittis
            molestie orci. Suspendisse ut laoreet mi. Phasellus{" "}
            <strong>eu tortor vehicula</strong>, blandit enim eu, auctor massa. Nulla
            ultricies tortor dolor, sit amet suscipit enim condimentum id.
          </Typography>

          <SocialMediaLinks />
        </div>
      </div>
    </div>
  )
}
