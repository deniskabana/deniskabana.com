import { css } from "@emotion/css"

export const styles = {
  link: css`
    display: inline-block;
    margin-bottom: 0.1rem;
    text-decoration: none;

    p {
      text-decoration: underline;
    }

    svg {
      margin-right: 0.5rem;
      vertical-align: middle;
    }
  `,
  wrapper: css`
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 1em;
  `,
}
