import { useTheme } from "@mui/material"
import { styles } from "./styles"

type LayoutProps = {
  children?: React.ReactNode
}

const ColumnLeft = ({ children }: LayoutProps) => {
  const theme = useTheme()
  return <div className={styles.gridColumnLeft(theme)}>{children}</div>
}
const ColumnRight = ({ children }: LayoutProps) => (
  <div className={styles.gridColumnRight}>{children}</div>
)

const CVLayout = ({ children }: LayoutProps) => (
  <div className={styles.gridContainer}>{children}</div>
)

CVLayout.ColumnLeft = ColumnLeft
CVLayout.ColumnRight = ColumnRight

export default CVLayout
