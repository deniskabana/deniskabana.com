import { useCallback } from "react"
import { Button, Typography, useTheme } from "@mui/material"
import Image from "next/image"
import { TECHNOLOGIES } from "@/constants/technologies"
import { styles } from "./styles"

export const Technologies = () => {
  const theme = useTheme()

  const renderTechnologies = useCallback(
    () =>
      TECHNOLOGIES.map((tech) => (
        <Button variant="outlined" className={styles.button(theme)} key={tech.name}>
          <Image alt={tech.name} src={tech.src} width={tech.width ?? 20} height={20} />
          <Typography variant="body2">{tech.name}</Typography>
        </Button>
      )),
    [theme],
  )

  return (
    <div className={styles.wrapper}>
      <Typography variant="body1" className={styles.title}>
        My favorite technologies:
      </Typography>

      <div className={styles.pillContainer}>{renderTechnologies()}</div>

      <Typography variant="body2" color={theme.palette.text.disabled}>
        ... and a lot more!
      </Typography>
    </div>
  )
}
