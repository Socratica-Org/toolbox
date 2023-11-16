import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

// @ts-ignore
import script from "./scripts/threejs.inline"

// import styles from "./styles/ThreeJsComponent.scss"

export default (() => {
  function ThreeJsComponent() {
    return <div id="threejs-container"></div>
  }

  ThreeJsComponent.afterDOMLoaded = script

  //   ThreeJsComponent.css = styles
  return ThreeJsComponent
}) satisfies QuartzComponentConstructor
