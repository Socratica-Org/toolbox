import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

// import styles from "./styles/ThreeJsComponent.scss"

export default (() => {
  function LandingComponent() {
    return (
      <div
        id="threejs-container"
        style={{ minHeight: "1000px", minWidth: "1000px", backgroundColor: "blue" }}
      >
        <p>testing</p>
      </div>
    )
  }

  //   ThreeJsComponent.css = styles
  return LandingComponent
}) satisfies QuartzComponentConstructor
