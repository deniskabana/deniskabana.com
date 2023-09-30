import { css } from "@emotion/css"

export const styles = {
  gridContainer: css`
    padding: 6rem 0;
  `,
  location: css`
    margin-top: 0.75rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.25rem;
    }

    div {
      display: block;
    }
  `,
  nameDivider: (color: string) => css`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-color: ${color};
  `,
  profilePicture: (color: string) => css`
    overflow: hidden;
    border-radius: 50%;
    width: 13rem;
    height: 13rem;
    border: 0.15rem solid ${color};
    padding: 0.6rem;
  `,
}
