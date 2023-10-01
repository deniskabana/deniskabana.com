import { useTheme } from "@mui/material"
import { cx } from "@emotion/css"
import { styles } from "./styles"

type LayoutProps = {
  children?: React.ReactNode
  landing?: boolean
}

export const ColumnLeft = ({ children }: LayoutProps) => {
  const theme = useTheme()
  return <div className={cx("cv-col-left", styles.gridColumnLeft(theme))}>{children}</div>
}
export const ColumnRight = ({ children }: LayoutProps) => (
  <div className={cx("cv-col-right", styles.gridColumnRight)}>{children}</div>
)

/**
 * Use for two column layout for CV.
 *
 * Exports:
 * - `CVLayout.ColumnLeft`
 * - `CVLayout.ColumnRight`
 */
const CVLayout = ({ children, landing = false }: LayoutProps) => (
  <div className={styles.gridContainer(landing)}>{children}</div>
)

CVLayout.ColumnLeft = ColumnLeft
CVLayout.ColumnRight = ColumnRight

export default CVLayout
