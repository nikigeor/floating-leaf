import * as THREE from 'three'

class Leaves {
	constructor(scene) {
		this.velocityVector = new THREE.Vector3(0,0,0)
		this.accelerationVector = new THREE.Vector3(0,0,0)
		this.forceVector = new THREE.Vector3(0,-0.005,0)

		const geometry = new THREE.BoxGeometry(5,1,3)
		const material = new THREE.MeshLambertMaterial({color:0x882222})
		const mesh = new THREE.Mesh(geometry, material)
		mesh.position.set(-10,0,0)

		
		scene.add(mesh)
		this.mesh = mesh
	}
	lift() {
		this.velocityVector.set(0,2,0)
		this.accelerationVector.set(Math.random()/10 -0.05,-0.05,0)
	}
	animate() {
		if(this.mesh.position.y <= 0 && this.velocityVector.y <= 0) {
			this.count = 0
			return
		}
		this.count++
		this.mesh.position.add(this.velocityVector)
		this.mesh.position.clamp(
			new THREE.Vector3(-18, 0, -10), 
			new THREE.Vector3(18, 30, 10)
			)
		if((this.count-15) % 30 === 0) {
			this.accelerationVector.x *= -1
		}
		this.velocityVector.add(this.accelerationVector)
		this.velocityVector.clamp(
			new THREE.Vector3(-10, -.1, -10), 
			new THREE.Vector3(10, 2, 10)
			)
		this.accelerationVector.add(this.forceVector)
		console.log(this.mesh.position)
		console.log(this.count)
	}
}

export default Leaves