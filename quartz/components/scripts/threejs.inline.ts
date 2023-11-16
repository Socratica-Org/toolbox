import * as THREE from "three"

document.addEventListener("nav", async (e: unknown) => {
  var scene = new THREE.Scene()
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  var renderer = new THREE.WebGLRenderer()

  renderer.setClearColor(0xfbf8ef)

  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById("threejs-container")!.appendChild(renderer.domElement)

  var group = new THREE.Group()

  // Create 5 boxes, each increasing in width by 1.25 and positioned lower on the y axis
  for (let i = 0; i < 5; i++) {
    var geometry = new THREE.BoxGeometry(1 + i * 1.25, 1, 1)
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff }) // Different color for distinction
    var cube = new THREE.Mesh(geometry, material)
    cube.position.y -= i // Adjust this value to change the height of the box
    var edges = new THREE.EdgesGeometry(geometry)
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000 })) // Black color
    line.position.y -= i // Adjust this value to change the height of the box
    group.add(cube)
    group.add(line)
    scene.add(group)
  }

  var animateGroup = new THREE.Group()
  animateGroup.add(group)

  scene.add(animateGroup)

  camera.position.z = 5

  // function animate() {
  //   requestAnimationFrame(animate)

  //   animateGroup.rotation.z += 0.01
  //   animateGroup.rotation.y += 0.01

  //   // Render the scene with the camera
  //   renderer.render(scene, camera)
  // }

  // // Call the animate function
  // animate()

  // Add scroll event listener to move the second cube
  let previousScrollPosition = window.scrollY
  window.addEventListener("scroll", function () {
    var scrollChange = window.scrollY - previousScrollPosition
    previousScrollPosition = window.scrollY

    // Iterate over each child in the group
    for (let i = 0; i < group.children.length; i++) {
      // Apply a different speed of movement to each box
      let speedFactor = (i + 1) * 1.5 // Adjust this value to change the speed difference between boxes
      group.children[i].position.y += (scrollChange / window.innerHeight) * speedFactor
    }
  })

  renderer.render(scene, camera)

  renderer.render(scene, camera)
  var leftElements = document.getElementsByClassName("left")
  for (let i = 0; i < leftElements.length; i++) {
    ;(leftElements[i] as HTMLElement).style.display = "none"
  }

  var rightElements = document.getElementsByClassName("right")
  for (let i = 0; i < rightElements.length; i++) {
    ;(rightElements[i] as HTMLElement).style.display = "none"
  }
})
