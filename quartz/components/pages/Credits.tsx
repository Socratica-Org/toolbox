import { QuartzComponentConstructor } from "../types"

function Credits() {
  return (
    <article class="popover-hint">
      <h1>Credits</h1>
      <p>This is credits page.</p>
    </article>
  )
}

export default (() => Credits) satisfies QuartzComponentConstructor
