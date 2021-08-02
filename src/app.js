import * as THREE from "three";
import Leaves from "./three-elements/leaves.js";
import Light from "./three-elements/lights.js";
import Background from "./three-elements/background";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";

//Scene
const scene = new THREE.Scene();

//Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x333333);
const canvas = renderer.domElement;
document.body.appendChild(canvas);

//Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 10, 20);
camera.rotation.x = -Math.PI / 30;
const controls = new PointerLockControls(camera, document.body);
document.body.addEventListener("click", () => {
  console.log("hi");
  controls.lock();
});

//Light
const light = new Light();
light.add(scene);

//Leaf
const leaf = new Leaves(scene);

//Background
const background = new Background(scene);

//Animation
function animate() {
  //Update scene elements
  leaf.animate();

  //Render new scene
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
// Event listeners
function canvasClick() {
  leaf.lift();
}

document.body.addEventListener("click", canvasClick);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
