import * as THREE from "three";
import Experience from "./Experience.js";
import { WebGLRenderer } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"; //importer
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"; //importer
/*import { EffectPass } from "three/examples/jsm/postprocessing/EffectPass.js" ; */ //importer
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPixelatedPass } from "three/examples/jsm/postprocessing/RenderPixelatedPass.js";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass.js";
/*import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";*/
import { ToonShader2 } from "three/examples/jsm/shaders/ToonShader.js";
//Importer les fichiers par le téléchargement npm
import World from "./World/World.js"; // pour une fois pour le render

export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes; // on passe par experience
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;

    this.setRenderer();
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });

    this.renderer.physicallyCorrectLights = true;

    this.renderer.toneMappingExposure = 1.75;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);

    this.composerCreate();
  }

  composerCreate() {
    this.composer = new EffectComposer(this.renderer);
    this.renderPass = new RenderPass(
      this.scene,
      this.camera.perspectiveCamera
    ); /*EXEMPLE*/
    this.composer.addPass(this.renderPass); /*exemple*/

    this.shaderEffect();
    this.outLineEffect();
  }

  outLineEffect() {}

  shaderEffect() {}

  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);
  }

  update() {
    this.renderer.render(this.scene, this.camera.perspectiveCamera);

    if (typeof this.composer !== "undefined") {
      this.renderer.render(this.scene, this.camera.perspectiveCamera);

      this.composer.render();
    }
  }
}
