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
        I am a <strong>Senior Frontend Engineer</strong> with <strong>10+ years</strong>{" "}
        of professional experience. I <strong>started using React in 2015</strong> and
        since then I have been a lot of technologies that came and went - including all
        CSS preprocessors and CSS-in-JS libraries.
        <br />
        <br />I am used to <strong>leading teams, departments or projects</strong> and
        mentoring junior team members with a hands-on approach. I am a strong{" "}
        <strong>team player</strong> with <strong>proactive attitude</strong>, always
        trying to improve the workflow and processes.
      </Typography>

      <SocialMediaLinks />
    </div>
  )
}
