import { Avatar, Divider, Typography, useTheme } from "@mui/material"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import MusicNoteIcon from "@mui/icons-material/MusicNote"
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts"
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill"
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

      <Typography variant="body1" color={theme.palette.text.disabled}>
        Senior Frontend Engineer ・ Technical Lead ・ Mentor
      </Typography>

      <br />

      <Typography variant="body2" textAlign="justify" mb={1.5}>
        Hi, I am Denis 👋
      </Typography>
      <Typography variant="body2" textAlign="justify" mb={1.5}>
        People tell me I&apos;m an established{" "}
        <strong>senior&nbsp;frontend&nbsp;engineer</strong> with strong background in web
        browser technology, TypeScript, React.js and I now have more than{" "}
        <strong>10 years</strong> of professional experience. I pride myself in my sense
        of humor.
      </Typography>
      <Typography variant="body2" textAlign="justify">
        I am a flexible guy, a great communicator (sometimes even presenter 🤞) and{" "}
        <strong>I prefer working with people</strong>. I love to work in teams, especially
        if the teams have good synergy.
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
