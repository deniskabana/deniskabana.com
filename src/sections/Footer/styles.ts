import { Theme } from "@mui/material"
import { css } from "@emotion/css"

export const styles = {
  divider: (theme: Theme) => css`
    border-color: ${theme.palette.text.disabled};
    border-bottom-width: 1px;
    margin: 1rem 0;
  `,
  textContainer: css`
    max-width: 30rem;
    margin: 0 auto;
  `,
  wrapper: css`
    text-align: center;
    padding: 2rem 0;
    margin-top: 3rem;
  `,
}
