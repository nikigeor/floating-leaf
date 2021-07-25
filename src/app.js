import * as THREE from "three";
import Leaves from "./three-elements/leaves.js";
import Light from "./three-elements/lights.js";
// import { Background } from "./three-elements/background.js";

//Scene
const scene = new THREE.Scene();

//Renderer
const renderer = new THREE.WebGLRenderer();
const MAX_SCENE_SIZE = 900;
let sceneSize = Math.min(
  MAX_SCENE_SIZE,
  Math.min(window.innerWidth, window.innerHeight)
);
renderer.setSize(sceneSize, sceneSize);
renderer.setClearColor(0x333333);
const canvas = renderer.domElement;
document.body.appendChild(canvas);

//Camera
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.set(0, 10, 20);
camera.rotation.x = -Math.PI / 30;

//Light
const light = new Light();
light.add(scene);

//Leaf
const leaf = new Leaves(scene);

//Background
// const background = new Background();
// background.add(scene);

//Animation
function animate() {
  //Detect window size changes and adjust scene size
  const newSize = Math.min(
    MAX_SCENE_SIZE,
    Math.min(window.innerWidth, window.innerHeight)
  );
  if (newSize !== sceneSize) {
    sceneSize = newSize;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneSize, sceneSize);
  }

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

canvas.addEventListener("click", canvasClick);
