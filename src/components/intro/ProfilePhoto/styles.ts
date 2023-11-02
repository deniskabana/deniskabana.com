import { css } from "@emotion/css"

export const styles = {
  contact: css`
    margin-bottom: 0.25rem;
    text-align: right;
    font-size: 0.65rem;
    text-decoration: underline;

    svg {
      display: block;
      margin-left: auto;
      margin-bottom: 0.1em;
    }
  `,
  contactTitle: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.7rem;
    font-weight: 700;
    margin-bottom: 0.5rem;

    svg {
      margin-right: 0.4rem;
    }
  `,
  divider: css`
    margin-top: 2rem;
  `,
  location: css`
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: flex-end;
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
    width: 7rem;
    height: 7rem;
    border: 0.15rem solid ${color};
    padding: 0.4rem;
    transform: scale(1.2);
  `,
}
