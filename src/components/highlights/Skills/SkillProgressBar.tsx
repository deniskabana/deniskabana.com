import {
  LinearProgress,
  LinearProgressProps,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import { styles } from "./styles"
import { FONT_SIZES, FONT_WEIGHTS } from "../../../styles"
import { Skill } from "../../../constants/skills"

interface SkillProgressBarProps extends Skill {
  color: LinearProgressProps["color"]
}

export const SkillProgressBar = ({
  title,
  color,
  skillOutOf100,
  yearStarted,
}: SkillProgressBarProps) => {
  const theme = useTheme()
  const year = new Date().getFullYear()

  return (
    <div className={styles.skillContainer(theme)}>
      <div>
        <Typography
          variant="body1"
          fontWeight={FONT_WEIGHTS.bold}
          fontSize={FONT_SIZES.medium}
          className={styles.experience}
        >
          {year - yearStarted}+
          <Typography
            component="span"
            display="block"
            variant="body2"
            color={theme.palette.text.disabled}
            fontSize={FONT_SIZES.smallest}
          >
            years
          </Typography>
        </Typography>
      </div>
      <Stack justifyContent="center" direction="column" width="100%">
        <Typography variant="body2" color={theme.palette.text.disabled}>
          {title}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={skillOutOf100}
          className={styles.progressBar}
          color={color}
        />
      </Stack>
    </div>
  )
}
