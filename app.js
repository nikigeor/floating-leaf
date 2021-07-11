import * as THREE from "https://unpkg.com/three@0.119.0/build/three.module.js";

//Scene
const scene = new THREE.Scene();

//Renderer
const renderer = new THREE.WebGLRenderer();
let sceneSize = Math.min(500, Math.min(window.innerWidth, window.innerHeight));
renderer.setSize(sceneSize, sceneSize);
document.body.appendChild(renderer.domElement);

//Camera
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

//Animation
function animate() {
  const newSize = Math.min(
    500,
    Math.min(window.innerWidth, window.innerHeight)
  );
  if (newSize !== sceneSize) {
    console.log("newSize", newSize);
    sceneSize = newSize;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneSize, sceneSize);
  }
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
