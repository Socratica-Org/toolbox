import { CARDS } from "./Landing"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ArticleTitle({ fileData, displayClass }: QuartzComponentProps) {
  const title = fileData.frontmatter?.title
  const card = CARDS[fileData.slug as keyof typeof CARDS]
  if (title) {
    return (
      <>
        <div class="header-card mobile-only">{card}</div>
        <h1 class={`article-title ${displayClass ?? ""}`}>{title}</h1>
      </>
    )
  } else {
    return null
  }
}
ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
