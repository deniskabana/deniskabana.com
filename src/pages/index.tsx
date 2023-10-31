import { Container } from "@mui/material"
import Head from "next/head"
import { MoreDemo } from "@/sections/MoreDemo/MoreDemo"
import { Intro } from "@/sections/Intro/Intro"
import { Header } from "@/sections/Header/Header"
import { Footer } from "@/sections/Footer/Footer"
import { Highlights } from "@/sections/Highlights/Highlights"
import { Experience } from "@/sections/Experience/Experience"

export default function Homepage() {
  return (
    <main>
      <Head>
        <title>Denis Kabana - Professional CV</title>
        <style>{`
          body { zoom: 1.15; }
          @media print { body { zoom: 1; } }
        `}</style>
      </Head>

      <Header />

      <Container>
        <Intro />
        <Highlights />
        <Experience />
        <MoreDemo />
      </Container>

      <Footer />
    </main>
  )
}
