import { Typography, useTheme } from "@mui/material"
import BackLinks from "@/components/more-work/BackLinks/BackLinks"
import CVLayout from "../../components/CVLayout/CVLayout"

export const MoreDemo = () => {
  const theme = useTheme()

  return (
    <CVLayout>
      <CVLayout.ColumnLeft>
        <Typography variant="h3" color={theme.palette.primary.main}>
          More of my work
        </Typography>
        <Typography
          mt={2.5}
          variant="body2"
          color={theme.palette.text.disabled}
          lineHeight="1"
          fontSize="0.65rem"
        >
          Discover more from me
        </Typography>
      </CVLayout.ColumnLeft>

      <CVLayout.ColumnRight>
        <BackLinks />
      </CVLayout.ColumnRight>
    </CVLayout>
  )
}
