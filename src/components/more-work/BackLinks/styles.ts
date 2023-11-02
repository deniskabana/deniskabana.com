import { Theme } from "@mui/material"
import { FONT_WEIGHTS } from "@/styles"
import { css } from "@emotion/css"

export const styles = {
  card: (theme: Theme) => css`
    flex: 0 1 calc(33.3% - 0.5rem);
    border-radius: 1rem;
    background: transparent;
    border-color: ${theme.palette.secondary.main};
    border-width: 2px;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 15%);
    text-decoration: none;

    @media print {
      box-shadow: none;
    }
  `,
  cardContent: css`
    padding: 0.5rem;
    padding-bottom: 0.5rem !important;
  `,
  container: css`
    display: flex;

    /* width: 100%; */
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
  dataType: (theme: Theme) => css`
    text-transform: capitalize;
    color: white;
    font-size: 0.6em;
    box-shadow: 0 0 14px 0 rgb(0 0 0 / 60%);
    font-weight: ${FONT_WEIGHTS.bold};
    letter-spacing: 0.8;
    background-color: ${theme.palette.secondary.main};
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    @media print {
      box-shadow: none;
    }
  `,
  imageOverlay: css`
    position: absolute;
    left: 0.5rem;
    bottom: 0.5rem;
  `,
  imageWrapper: css`
    position: relative;
    height: 5rem;
    overflow: hidden;
    background: black;

    img {
      opacity: 0.6;
      height: 100%;
    }

    @media print {
      box-shadow: none;
    }
  `,
  title: css`
    color: white;
    font-weight: ${FONT_WEIGHTS.bold};
    text-shadow: 0 0 12px rgb(0 0 0 / 95%);

    @media print {
      text-shadow: none;
    }
  `,
}
