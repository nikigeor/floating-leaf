import * as THREE from "three"

class Leaves {
  constructor(scene) {
    this.velocityVector = new THREE.Vector3(0, 0, 0)
    this.accelerationVector = new THREE.Vector3(0, 0, 0)
    this.forceVector = new THREE.Vector3(0, -0.0005, 0)
    this.pendulumDirection = 1
    this.pendulumPosition = 0

    const geometry = new THREE.BoxGeometry(1, .1, 1.5)
    const material = new THREE.MeshLambertMaterial({ color: 0x882222 })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0, 0, 0)

    scene.add(mesh)
    this.mesh = mesh
  }
  lift() {
    this.velocityVector.set(0, .6, 0)
    this.accelerationVector.set(0, 0.001, 0)
    this.isAnimationActive = true
  }
  animate() {
    if(!this.isAnimationActive) {
      return
    }
    
    this.mesh.position.add(this.velocityVector)

    if (this.mesh.position.y <= 0) {
      this.velocityVector.set(0, 0, 0)
      this.pendulumPosition += Math.PI/2
      this.isAnimationActive = false
    }
    if (this.velocityVector.y < 0) {
      this.mesh.position.add(
        {
          x: Math.sin(this.pendulumPosition) / 5,
          y: (Math.cos(this.pendulumPosition)) / 50,
          z: 0
        }
      )
      this.pendulumPosition += .1
    }
    this.mesh.position.clamp(
      { x: -18, y: 0, z: -10 },
      { x: 18, y: 30, z: 10 }
    )
    this.velocityVector.add(this.accelerationVector)
    this.velocityVector.clamp(
      { x: -10, y: -0.1, z: -1 },
      { x: 10, y: 10, z: 10 }
    )
    this.accelerationVector.add(this.forceVector)
  }
}

export default Leaves
