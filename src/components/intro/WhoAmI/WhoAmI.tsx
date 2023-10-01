import { Divider, Typography, useTheme } from "@mui/material"
import { SocialMediaLinks } from "../SocialMediaLinks/SocialMediaLinks"

export const WhoAmI = () => {
  const theme = useTheme()

  return (
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
  )
}
