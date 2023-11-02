import { Theme } from "@mui/material"
import { css } from "@emotion/css"

export const styles = {
  divider: (theme: Theme) => css`
    border-color: ${theme.palette.text.disabled};
    border-bottom-width: 1px;
    margin: 1rem auto 2rem;
    max-width: 30rem;

    @media print {
      opacity: 0.5;
    }
  `,
  footer: css`
    margin-top: 3rem;
  `,
  gdprWarning: css`
    @media print {
      display: none !important;
    }
  `,
  textContainer: css`
    max-width: 30rem;
    margin: 0 auto;
  `,
  wrapper: css`
    text-align: center;
    padding: 2rem 0 0;
    margin-top: 1rem;
  `,
}
