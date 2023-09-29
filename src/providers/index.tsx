import type { EmotionCache } from "@emotion/react"
import type { QueryClient } from "@tanstack/react-query"

import { MuiThemeProvider } from "./MuiThemeProvider"
import { ReactQueryProvider } from "./ReactQueryProvider"
import { EmotionCacheProvider } from "./EmotionCacheProvider"

type Props = {
  children: React.ReactNode
  emotionCache: EmotionCache
  queryClient: QueryClient
}

export const AppProvider = ({ children, queryClient, emotionCache }: Props) => {
  return (
    <EmotionCacheProvider emotionCache={emotionCache}>
      <ReactQueryProvider queryClient={queryClient}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </ReactQueryProvider>
    </EmotionCacheProvider>
  )
}
