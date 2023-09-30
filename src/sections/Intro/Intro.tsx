import { Divider, Grid, Typography, useTheme } from "@mui/material"
import Image from "next/image"

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"

import { styles } from "./styles"
import { SocialMediaLinks } from "../../components/SocialMediaLinks/SocialMediaLinks"

export const Intro = () => {
  const theme = useTheme()

  return (
    <Grid item container className={styles.gridContainer} spacing={5}>
      <Grid item container sm={5} md={4} alignItems="center" justifyContent="center">
        <Image
          className={styles.profilePicture(theme.palette.primary.dark)}
          src="/images/profile-photo.jpg"
          alt="Profile photo"
          width={260}
          height={260}
          priority={true}
        />
        <Typography variant="body2" className={styles.location}>
          <LocationOnOutlinedIcon fontSize="large" />
          <span>
            <strong>Prague</strong>
            <br />
            Czech republic
          </span>
        </Typography>
      </Grid>

      <Grid item container sm={7} md={8} alignItems="center">
        <div>
          <Typography variant="h1">
            Hi,&nbsp;I&rsquo;m{" "}
            <Typography
              component="span"
              variant="h1"
              fontWeight={600}
              color={theme.palette.primary.main}
            >
              Denis&nbsp;Kabana!
            </Typography>
          </Typography>

          <Divider className={styles.nameDivider(theme.palette.primary.dark)} />

          <Typography variant="body1" color={theme.palette.text.disabled}>
            Senior Frontend Engineer
          </Typography>

          <br />

          <Typography variant="body2">
            <strong>Turpis, sit amet iaculis dui consectetur at.</strong> Cras sagittis molestie
            orci. Suspendisse ut laoreet mi. Phasellus <strong>eu tortor vehicula</strong>, blandit
            enim eu, auctor massa. Nulla ultricies tortor dolor, sit amet suscipit enim condimentum
            id.
          </Typography>

          <SocialMediaLinks />
        </div>
      </Grid>
    </Grid>
  )
}
