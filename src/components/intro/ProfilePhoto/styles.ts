import { css } from "@emotion/css"

export const styles = {
  location: css`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    text-align: justify;

    svg {
      margin-right: 0.5rem;
    }

    div {
      display: block;
    }
  `,
  profilePicture: (color: string) => css`
    overflow: hidden;
    border-radius: 50%;
    width: 8.5rem;
    height: 8.5rem;
    border: 0.15rem solid ${color};
    padding: 0.6rem;
  `,
}
