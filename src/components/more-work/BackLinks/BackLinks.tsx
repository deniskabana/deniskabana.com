import { useMemo } from "react"

import { backLinks } from "@/constants/backLinks"
import { styles } from "./styles"
import { ArticleCard } from "./ArticleCard"

const BackLinks = () => {
  const backLinksContent = useMemo(
    () => backLinks.map((data) => <ArticleCard data={data} key={data.title} />),
    [],
  )

  return <div className={styles.container}>{backLinksContent}</div>
}

export default BackLinks
