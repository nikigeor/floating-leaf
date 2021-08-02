import * as THREE from "three";
import posz from "../Park2/posz.jpg";
import posy from "../Park2/posy.jpg";
import posx from "../Park2/posx.jpg";
import negz from "../Park2/negz.jpg";
import negy from "../Park2/negy.jpg";
import negx from "../Park2/negx.jpg";

class Background {
  constructor(scene) {
    this.loader = new THREE.CubeTextureLoader();
    this.urls = [posx, negx, posy, negy, posz, negz];

    scene.background = this.loader.load(this.urls);
  }
}

export default Background;
