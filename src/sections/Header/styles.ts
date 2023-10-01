import { Theme } from "@mui/material"
import { css } from "@emotion/css"
import { hex2rgba } from "../../utils/hex2rgba"

export const styles = {
  headerButton: css`
    svg {
      margin-right: 0.5rem;
    }
  `,
  stickyHeader: (theme: Theme) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: ${hex2rgba(
      theme.palette.background.default,
      theme.palette.mode === "dark" ? 0.8 : 0.7,
    )};
    backdrop-filter: blur(12px) saturate(180%);
  `,
  wrapper: css`
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0;
    gap: 0.75rem;
  `,
}
