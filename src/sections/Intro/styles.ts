import { css } from "@emotion/css"
import { drawerWidth } from "../../styles"

export const styles = {
  gridColumnLeft: css`
    flex: 0 0 ${drawerWidth};
    padding: 0 1.5rem;
  `,
  gridColumnRight: css`
    flex: 1 1 auto;
    padding: 1rem 1.5rem 0 0;
  `,
  gridContainer: css`
    padding: 4rem 0;
    display: flex;
  `,
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
