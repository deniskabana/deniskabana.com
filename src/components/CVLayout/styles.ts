import { Theme } from "@mui/material"
import { css } from "@emotion/css"
import { drawerWidth } from "../../styles"

export const styles = {
  gridColumnLeft: (theme: Theme) => css`
    flex: 0 0 ${drawerWidth}px;
    width: ${drawerWidth};
    padding: 0.5rem 1.5rem 0;
    border-right: 2px solid ${theme.palette.divider};
    text-align: right;
  `,
  gridColumnRight: css`
    flex: 1 1 auto;
    padding: 0.25rem 1.5rem 0;
  `,
  gridContainer: (landing: boolean) => css`
    margin: ${landing ? "5rem 0" : "2.5rem 0"};
    display: flex;

    ${landing &&
    css`
      .cv-col-right {
        padding-top: 1rem;
      }
    `}
  `,
}
