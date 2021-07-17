import * as THREE from 'three'

class Leaves {
	constructor(size,x,y) {
		this.size = size
		this.y = y
		this.x = x
	}
	add(scene) {
		const geometry = new THREE.BoxGeometry(5,1,3)
		const material = new THREE.MeshLambertMaterial({color:0x882222})
		const mesh = new THREE.Mesh(geometry, material)
		mesh.position.y = 0
		mesh.position.x = -10
		scene.add(mesh)
		this.mesh = mesh
	}
}

export default Leaves