import { css } from "@emotion/css"

export const styles = {
  button: css`
    height: 1.75rem;
    border-radius: 1rem;
    border-width: 2px !important;
    text-transform: none;
    padding-left: 0.6rem;
    padding-right: 0.6rem;

    img {
      margin-right: 0.3rem;
      height: 0.8rem;
      width: auto;
    }
  `,
  pillContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  `,
  title: css`
    margin-bottom: 1rem;
  `,
  wrapper: css`
    margin-bottom: 1.5rem;
  `,
}
