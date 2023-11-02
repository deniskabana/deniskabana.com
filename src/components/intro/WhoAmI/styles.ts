import { Theme, avatarClasses } from "@mui/material"
import { css } from "@emotion/css"

export const styles = {
  hobbies: css`
    margin: 1.5rem 0 0;
    display: flex;
    flex-wrap: wrap;
  `,
  hobbiesTitle: css`
    flex: 1 0 100%;
    margin-bottom: 0.75rem;
  `,
  singleHobby: (theme: Theme) => css`
    flex: 0 0 50%;
    display: flex;
    align-items: center;
    letter-spacing: 0;
    margin-bottom: 0.75rem;
    color: ${theme.palette.text.disabled};

    ${"." + avatarClasses.root} {
      width: 26px;
      height: 26px;
      margin-right: 0.35rem;
      background-color: ${theme.palette.secondary.main};
    }
    ${"." + avatarClasses.root} svg {
      width: 70%;
      height: 70%;
      display: block;
      margin: auto;
    }
  `,
}
