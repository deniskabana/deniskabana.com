import { Button, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./styles"
import { FONT_WEIGHTS } from "../../../styles"

export const Technologies = () => {
  return (
    <div className={styles.wrapper}>
      <Typography variant="body1" className={styles.title}>
        Technologies I work with:
      </Typography>

      <div className={styles.pillContainer}>
        <Button variant="outlined" color="inherit" className={styles.button}>
          <Image
            alt="Typescript"
            src="/images/typescript-logo.png"
            width={20}
            height={20}
          />
          <Typography variant="body2">TypeScript</Typography>
        </Button>

        <Button variant="outlined" color="inherit" className={styles.button}>
          <Image alt="React.js" src="/images/react-logo.png" width={23} height={20} />
          <Typography variant="body2">React.js</Typography>
        </Button>

        <Button variant="outlined" color="inherit" className={styles.button}>
          <Image alt="Node.js" src="/images/node-logo.png" width={18} height={20} />
          <Typography variant="body2">Node.js</Typography>
        </Button>

        <Button variant="outlined" color="inherit" className={styles.button}>
          <Image
            alt="Next.js"
            src="/images/next-logo.png"
            width={18}
            height={20}
            style={{ background: "white", borderRadius: "50%" }}
          />
          <Typography variant="body2">Next.js</Typography>
        </Button>

        <Button variant="outlined" color="inherit" className={styles.button}>
          <Image alt="Material UI" src="/images/mui-logo.png" width={22} height={20} />
          <Typography variant="body2">Material UI</Typography>
        </Button>

        <Button variant="outlined" color="inherit" className={styles.button}>
          <Image alt="Webpack" src="/images/webpack-logo.png" width={19} height={20} />
          <Typography variant="body2">Webpack</Typography>
        </Button>

        <Button variant="outlined" color="inherit" className={styles.button}>
          <Image alt="Jest" src="/images/jest-logo.svg" width={20} height={20} />
          <Typography variant="body2">Jest</Typography>
        </Button>

        <Button variant="outlined" color="inherit" className={styles.button}>
          <Image alt="Open API" src="/images/openapi-logo.png" width={20} height={20} />
          <Typography variant="body2">OpenAPI</Typography>
        </Button>

        <Button variant="outlined" color="inherit" className={styles.button}>
          <Image
            alt="PostgreSQL"
            src="/images/postgres-logo.png"
            width={20}
            height={20}
          />
          <Typography variant="body2">PostgreSQL</Typography>
        </Button>

        <Button variant="outlined" color="inherit" className={styles.button}>
          <Image
            alt="Storybook"
            src="/images/storybook-logo.png"
            width={20}
            height={20}
          />
          <Typography variant="body2">Storybook</Typography>
        </Button>
      </div>

      <Typography
        variant="body2"
        textAlign="center"
        color="GrayText"
        fontWeight={FONT_WEIGHTS.bold}
      >
        ... and a lot more!
      </Typography>
    </div>
  )
}
