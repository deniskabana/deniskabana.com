import { Theme } from "@mui/material"
import { css } from "@emotion/css"

export const styles = {
  button: (theme: Theme) => css`
    height: 1.7rem;
    border-radius: 1rem;
    border-width: 1px !important;
    border-color: ${theme.palette.text.disabled};
    text-transform: none;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    pointer-events: none;

    p {
      color: ${theme.palette.text.disabled};
    }

    img {
      margin-right: 0.3rem;
      height: 0.8rem;
      width: auto;
    }
  `,
  pillContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1rem;
  `,
  title: css`
    margin-bottom: 1rem;
  `,
  wrapper: css``,
}
