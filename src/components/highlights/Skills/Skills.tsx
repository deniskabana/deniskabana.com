import { useMemo } from "react"
import { LinearProgressProps, Typography, useTheme } from "@mui/material"
import { SKILLS_DATA } from "@/constants/skills"
import { styles } from "./styles"
import { SkillProgressBar } from "./SkillProgressBar"

export const Skills = () => {
  const theme = useTheme()

  const BAR_COLORS: LinearProgressProps["color"][] = useMemo(
    () => ["secondary", "inherit", "primary", "success", "error"],
    [],
  )

  const renderedSkills = useMemo(
    () =>
      SKILLS_DATA.map((skill, index) => (
        <SkillProgressBar key={skill.title} color={BAR_COLORS[index]} {...skill} />
      )),
    [BAR_COLORS],
  )

  return (
    <div className={styles.wrapper}>
      <Typography variant="body1" mb={4}>
        My most valuable skills are:
      </Typography>

      {renderedSkills}

      <Typography variant="body2" color={theme.palette.text.disabled} mt={3}>
        ... and a lot more!
      </Typography>
    </div>
  )
}
