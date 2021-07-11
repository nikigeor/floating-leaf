class Light {
	add(scene) {
		this.ambient = new THREE.AmbientLight(0xffffff)
		scene.add(this.ambient)
		this.directional = new THREE.DirectionalLight(0xffffff,0.5)
		this.directional.position.y = 3
		this.directional.position.z = 2
		this.directional.position.x = -1
		scene.add(this.directional)
	}
}

export default Light