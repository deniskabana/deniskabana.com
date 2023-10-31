import { Card, CardMedia, CardContent, Typography, useTheme, Chip } from "@mui/material"
import { BackLink } from "@/constants/backLinks"
import { FONT_SIZES } from "@/styles"
import { styles } from "./styles"

type ArticleCardProps = {
  data: BackLink
}

export const ArticleCard = ({ data }: ArticleCardProps) => {
  const theme = useTheme()

  return (
    <Card className={styles.card(theme)} variant="outlined">
      <div className={styles.imageWrapper}>
        <CardMedia component="img" image={data.imageUrl} alt={data.title} />
        <Chip label={data.type} className={styles.dataType(theme)} size="small" />
        <div className={styles.imageOverlay}>
          <Typography variant="body2" className={styles.title}>
            {data.title}
          </Typography>
        </div>
      </div>
      <CardContent className={styles.cardContent}>
        <Typography
          variant="body2"
          color={theme.palette.text.disabled}
          fontSize={FONT_SIZES.smallest}
        >
          {data.shortDescription}
        </Typography>
      </CardContent>
    </Card>
  )
}
