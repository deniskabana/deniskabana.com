import { Typography, useTheme } from "@mui/material"
import CVLayout from "../../components/CVLayout/CVLayout"
import { Technologies } from "../../components/highlights/Technologies/Technologies"

export const Highlights = () => {
  const theme = useTheme()

  return (
    <CVLayout>
      <CVLayout.ColumnLeft>
        <Typography variant="h2" color={theme.palette.primary.main}>
          Highlights
        </Typography>
      </CVLayout.ColumnLeft>

      <CVLayout.ColumnRight>
        <Technologies />
        <Technologies />
      </CVLayout.ColumnRight>
    </CVLayout>
  )
}
