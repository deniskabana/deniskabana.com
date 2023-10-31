import { Theme } from "@mui/material"
import { css } from "@emotion/css"
import { timelineItemClasses } from "@mui/lab"

export const styles = {
  description: (theme: Theme) => css`
    color: ${theme.palette.text.disabled};
    margin-top: 0.5rem;
    display: block;
  `,

  descriptionPoints: css`
    margin-top: 0.75rem;
    padding-left: 1rem;
    list-style: disc;
  `,

  durationAndLocation: css`
    margin-bottom: 0.15rem;

    svg {
      vertical-align: middle;
      margin-right: 0.2rem;
    }

    svg ~ span {
      vertical-align: middle;
    }
  `,

  positionTitle: css`
    margin-bottom: 0.35rem;
  `,

  timelineConnector: (theme: Theme) => css`
    background-color: ${theme.palette.secondary.main};
    width: 3px;

    @media print {
      display: block !important;
      background-color: ${theme.palette.secondary.main} !important;
      width: 3px !important;
      opacity: 1 !important;
      visibility: visible !important;
    }
  `,

  timelineContent: css`
    padding-bottom: 2rem;
    padding-top: 0;
  `,

  timelineDot: (theme: Theme) => css`
    box-shadow: none;
    background: ${theme.palette.background.default};
    border-radius: 50%;
    padding: 3px;
    border: 3px solid ${theme.palette.secondary.main};

    img {
      border-radius: 50%;
    }
  `,

  timelineWrapper: css`
    margin-top: 0;

    ${"." + timelineItemClasses.root}:before {
      flex: 0;
      padding: 0;
    }
  `,
}
