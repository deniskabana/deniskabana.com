import { useState } from "react"
import { GlobalStyles } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import Head from "next/head"
import { AppProps } from "next/app"
import { EmotionCache } from "@emotion/react"
import createEmotionCache from "@/utils/createEmotionCache"
import { QueryClient } from "@tanstack/react-query"
import { AppProvider } from "@/providers"

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient())
  const { emotionCache = clientSideEmotionCache, pageProps } = props
  const Component = (props.Component as React.FC) ?? undefined

  return (
    <AppProvider queryClient={queryClient} emotionCache={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <GlobalStyles styles="html { font-size: 20px; } @media print { html { font-size: 16px; } }" />
      <Component {...pageProps} />
    </AppProvider>
  )
}
