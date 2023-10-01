import { Theme } from "@mui/material"
import { css } from "@emotion/css"
import { drawerWidth } from "../../styles"

export const styles = {
  gridColumnLeft: (theme: Theme) => css`
    flex: 0 0 ${drawerWidth};
    padding: 0 1.5rem;
    border-right: 2px solid ${theme.palette.divider};
  `,
  gridColumnRight: css`
    flex: 1 1 auto;
    padding: 1rem 1.5rem 0;
  `,
  gridContainer: css`
    padding: 3rem 0;
    display: flex;
  `,
}
