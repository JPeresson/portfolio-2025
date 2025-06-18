import * as THREE from "three";
import Experience from "../Experience.js";

export default class Environnement {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.texture = this.resources.items.fondBleu;

    this.setSunlight();
    this.setBackground();
  }

  setSunlight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(1.5, 7, 3);
    this.scene.add(this.sunLight);

    this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
    this.scene.add(this.ambientLight);
  }

  setBackground() {
    this.geometry = new THREE.PlaneGeometry(12, 7.8, 36, 22);
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
    });

    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.plane.position.z = -2.75;
    this.scene.add(this.plane);

    this.clock = new THREE.Clock();
  }

  update() {
    this.t = this.clock.getElapsedTime();

    this.positionAttribute = this.plane.geometry.getAttribute("position");

    this.vertex = new THREE.Vector3();

    for (this.i = 0; this.i < this.positionAttribute.count; this.i++) {
      this.vertex.fromBufferAttribute(this.positionAttribute, this.i); // read vertex

      // do something with vertex
      this.wave1 = 0.2 * Math.sin(this.vertex.x * 1 + this.t * 0.1);
      this.wave2 = 0.2 * Math.sin(this.vertex.x * 0.5 + this.t * 0.25);
      this.wave3 = 0.4 * Math.sin(this.vertex.y * 2 + this.t * 0.5);
      this.wave4 = 0.1 * Math.sin(this.vertex.y * 0.45 + this.t * 0.1);

      this.waves = this.wave1 + /* this.wave2*/ +this.wave3 + this.wave4;

      this.positionAttribute.setXYZ(
        this.i,
        this.vertex.x,
        this.vertex.y,
        this.waves
      ); // write coordinates back
    }

    this.plane.geometry.attributes.position.needsUpdate = true;
  }
}
