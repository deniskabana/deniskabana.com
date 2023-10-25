import { Typography, useTheme } from "@mui/material"

export const Heading = () => {
  const theme = useTheme()

  return (
    <>
      <Typography variant="body1" mb={2}>
        A curated list of my client portfolio.
      </Typography>
      <Typography variant="body2" color={theme.palette.text.disabled} mb={4}>
        This is a shortened version showcasing my skills. Some other clients I have not
        mentioned are{" "}
        <Typography display="inline" variant="body2" color={theme.palette.text.primary}>
          Air Bank
        </Typography>
        ,{" "}
        <Typography display="inline" variant="body2" color={theme.palette.text.primary}>
          Novartis
        </Typography>
        ,{" "}
        <Typography display="inline" variant="body2" color={theme.palette.text.primary}>
          Eurojet Services
        </Typography>
        ,{" "}
        <Typography display="inline" variant="body2" color={theme.palette.text.primary}>
          MEWS Systems
        </Typography>{" "}
        and more.
      </Typography>
    </>
  )
}
