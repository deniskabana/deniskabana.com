import { Container } from "@mui/material"
import Head from "next/head"
import { Intro } from "../sections/Intro/Intro"
import { Header } from "../sections/Header/Header"
import { Footer } from "../sections/Footer/Footer"

export default function Homepage() {
  return (
    <main>
      <Head>
        <title>Homepage</title>
      </Head>

      <Container>
        <Header />
        <Intro />
        <Footer />
      </Container>
    </main>
  )
}
