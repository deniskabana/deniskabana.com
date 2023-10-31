import { Typography, useTheme } from "@mui/material"
import CVLayout from "../../components/CVLayout/CVLayout"
import { Technologies } from "../../components/highlights/Technologies/Technologies"
import { Skills } from "../../components/highlights/Skills/Skills"

export const Highlights = () => {
  const theme = useTheme()

  return (
    <CVLayout>
      <CVLayout.ColumnLeft>
        <Typography variant="h3" color={theme.palette.primary.main}>
          Highlights
        </Typography>
        <Typography
          mt={2.5}
          variant="body2"
          color={theme.palette.text.disabled}
          lineHeight="1"
          fontSize="0.65rem"
        >
          Some of my unique qualities
        </Typography>
      </CVLayout.ColumnLeft>

      <CVLayout.ColumnRight>
        <Skills />
        <Technologies />
      </CVLayout.ColumnRight>
    </CVLayout>
  )
}
