import { Box, Container, Divider, Typography } from "@mui/material"
import Head from "next/head"
import { meta } from "@/constants/meta"

export default function Homepage() {
  return (
    <main>
      <Head>
        <title>Homepage</title>
      </Head>

      <Container>
        <Box p={2} pt={4} textAlign="center">
          <Typography variant="h1">{meta.title}</Typography>
          <Typography variant="body1">{meta.description}</Typography>
          <Divider />
          <Typography variant="body2">This is a sample page.</Typography>
        </Box>
      </Container>
    </main>
  )
}
