import { Avatar, Divider, Typography, useTheme } from "@mui/material"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import MusicNoteIcon from "@mui/icons-material/MusicNote"
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts"
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill"
import { FONT_WEIGHTS } from "@/styles"
import { styles } from "./styles"

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

      <Typography
        variant="body2"
        color={theme.palette.secondary.main}
        fontWeight={FONT_WEIGHTS.bold}
        mb={4}
      >
        Senior Frontend Engineer ・ Technical Lead ・ Mental health advocate
      </Typography>

      <Typography variant="body2" textAlign="justify" mb={2.5}>
        Hello there! I&rsquo;m Denis 👋
      </Typography>
      <Typography variant="body2" textAlign="justify" mb={2.5}>
        Rumor has it, I&rsquo;m quite the seasoned senior frontend engineer with{" "}
        <strong>over a decade under my belt</strong>, specializing in web browser tech,{" "}
        <strong>TypeScript, and React.js</strong>. And yes, I&rsquo;m the kind of guy who
        brings humor and positive vibes to the table 😅
      </Typography>
      <Typography variant="body2" textAlign="justify">
        Flexibility&rsquo;s my middle name. When it comes to communication, I
        shine&nbsp;&mdash;&nbsp;whether I&rsquo;m collaborating behind the scenes or
        confidently stepping into the spotlight.{" "}
      </Typography>

      <div className={styles.hobbies}>
        <Typography variant="body1" className={styles.hobbiesTitle}>
          My hobbies
        </Typography>

        <Typography variant="body2" className={styles.singleHobby(theme)}>
          <Avatar>
            <DirectionsCarIcon />
          </Avatar>
          German cars from pre-2011 era
        </Typography>

        <Typography variant="body2" className={styles.singleHobby(theme)}>
          <Avatar>
            <MusicNoteIcon />
          </Avatar>
          Composing and discovering music
        </Typography>

        <Typography variant="body2" className={styles.singleHobby(theme)}>
          <Avatar>
            <SportsMartialArtsIcon />
          </Avatar>
          Martial arts training
        </Typography>

        <Typography variant="body2" className={styles.singleHobby(theme)}>
          <Avatar>
            <OutdoorGrillIcon />
          </Avatar>
          Cooking and culinary exploration
        </Typography>
      </div>
    </div>
  )
}
