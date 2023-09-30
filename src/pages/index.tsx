import { Container } from "@mui/material"
import Head from "next/head"
import { Intro } from "../sections/Intro/Intro"

export default function Homepage() {
  return (
    <main>
      <Head>
        <title>Homepage</title>
      </Head>

      <Container>
        <Intro />
      </Container>
    </main>
  )
}
