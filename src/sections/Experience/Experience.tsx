import { Typography, useTheme } from "@mui/material"
import CVLayout from "../../components/CVLayout/CVLayout"
import { JobsList } from "../../components/experience/JobsList/JobsList"
import { Heading } from "../../components/experience/Heading/Heading"

export const Experience = () => {
  const theme = useTheme()

  return (
    <CVLayout>
      <CVLayout.ColumnLeft>
        <Typography variant="h3" color={theme.palette.primary.main}>
          Professional experience
        </Typography>
        <Typography
          mt={2.5}
          variant="body2"
          color={theme.palette.text.disabled}
          lineHeight="1"
          fontSize="0.65rem"
        >
          A list of note-worthy clients I worked with.
        </Typography>
      </CVLayout.ColumnLeft>

      <CVLayout.ColumnRight>
        <Heading />
        <JobsList />
      </CVLayout.ColumnRight>
    </CVLayout>
  )
}
