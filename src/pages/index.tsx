import { Container } from "@mui/material"
import Head from "next/head"
import { Intro } from "../sections/Intro/Intro"
import { Header } from "../sections/Header/Header"
import { Footer } from "../sections/Footer/Footer"
import { Highlights } from "../sections/Highlights/Highlights"

export default function Homepage() {
  return (
    <main>
      <Head>
        <title>Denis Kabana - Professional CV</title>
      </Head>

      <Header />

      <Container>
        <Intro />
        <Highlights />

        <Footer />
      </Container>
    </main>
  )
}
