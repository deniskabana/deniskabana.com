import { Theme } from "@mui/material"
import { css } from "@emotion/css"

export const styles = {
  experience: css`
    width: 2rem;
    height: 2.35rem;
    padding: 0;
    margin-right: 0.25rem;
    pointer-events: none;
  `,
  progressBar: css`
    margin-top: 0.25rem;
    flex: 1 0 auto;
    width: 100%;
  `,
  skillContainer: (theme: Theme) => css`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${theme.palette.divider};
  `,
  wrapper: css`
    margin-bottom: 2rem;
  `,
}
