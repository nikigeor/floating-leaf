import * as THREE from "three";
import OrbitControls from "three/examples/jsm/controls/OrbitControls.js";

class Background {
  add(scene) {
    this.controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    scene.add(this.controls);

    this.urls = [
      "posx.jpg",
      "negx.jpg",
      "posy.jpg",
      "negy.jpg",
      "posz.jpg",
      "negz.jpg",
    ];

    this.loader = new THREE.CubeTextureLoader();
    scene.background = loader.load(urls);

    scene.add(this.urls);
  }
}

export default Background;
