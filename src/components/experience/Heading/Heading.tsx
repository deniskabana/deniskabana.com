import { Typography, useTheme } from "@mui/material"

export const Heading = () => {
  const theme = useTheme()

  return (
    <>
      <Typography variant="body1" mb={2}>
        Selected Client Portfolio
      </Typography>
      <Typography
        variant="body2"
        color={theme.palette.text.disabled}
        mb={4}
        textAlign="justify"
      >
        Below is a concise selection highlighting my diverse range of experience. While
        this list is illustrative, I&rsquo;ve also had the privilege of working with
        notable names such as{" "}
        <Typography display="inline" variant="body2" color={theme.palette.text.primary}>
          Air&nbsp;Bank
        </Typography>
        ,{" "}
        <Typography display="inline" variant="body2" color={theme.palette.text.primary}>
          Novartis
        </Typography>
        ,{" "}
        <Typography display="inline" variant="body2" color={theme.palette.text.primary}>
          Eurojet&nbsp;Services
        </Typography>
        ,{" "}
        <Typography display="inline" variant="body2" color={theme.palette.text.primary}>
          MEWS&nbsp;Systems
        </Typography>{" "}
        and more.
      </Typography>
    </>
  )
}
