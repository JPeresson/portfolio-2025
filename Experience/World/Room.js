import * as THREE from "three";
import Experience from "../Experience.js"; // .. sors de World (dossier)
import { DataTexture } from "three";

import {
  ToonShader2,
  ToonShader3,
  ToonShaderBleu,
  ToonShaderEtoile,
  ToonShaderPinces,
  ToonShaderP,
  ToonShaderPouffe,
} from "../Utils/2.js";
// handpainting texture pour faire mes assets 3D en toon ou 2D - style jeu vidéo avec baking

export default class Couronne {
  //test fauxs
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.couronne = this.resources.items.couronne; //pas room en nom (changement) : accès par nom
    this.actualCouronne = this.couronne.scene; //l'item à une scène également une fois loaded (par coeur)
    this.couronneChildren = {};
    this.nombreDenfant;
    this.gradientMap;
    this.sizes = this.experience.sizes;

    this.setModel();

    //Objet de base pour initialiser
  }

  setModel() {
    this.scene.add(this.actualCouronne);
    this.actualCouronne.scale.set(1.3, 1.3, 1.3);
    this.actualCouronne.position.x = -0.35;
    this.actualCouronne.position.y = -0.3;

    this.actualCouronne.children.forEach((child) => {
      this.couronneChildren[child.name.toLowerCase()] = child;
      this.nombreDenfant = this.couronneChildren.length;
    });

    this.setMaterial();
  }

  setMaterial() {
    /*this.couronneChildren.moncoussin.material = new THREE.MeshToonMaterial();*/
    console.log(this.couronneChildren);
    this.couronneColor();
    this.jColor();
    this.starColor();
    this.pincesColor();
    this.pColor();
    this.pouffeColor();
  }

  couronneColor() {
    /*	

		this.rouge = this.couronneChildren.couronnebase.children[1].material;*/
    /*		this.shader.uniforms["uDirLightColor"].value = new Color(0xffebc8);*/

    this.couronne = this.couronneChildren.couronne.children[0].material =
      new THREE.ShaderMaterial(ToonShader2);
    this.couronne.uniforms["uDirLightPos"].value = new THREE.Vector3(
      0,
      0.13,
      0.97
    );
    this.couronne.uniforms["uAmbientLightColor"].value = new THREE.Color(
      0xff8000
    );

    this.couronne.uniforms["uLineColor1"].value = new THREE.Color(0xe7e1ca); //blanc OK
    this.couronne.uniforms["uLineColor2"].value = new THREE.Color(0xe4d9af); // jaune
    this.couronne.uniforms["uLineColor3"].value = new THREE.Color(0xeaca57); //jauneBase
    this.couronne.uniforms["uLineColor4"].value = new THREE.Color(0xd5755d); //orange
    this.couronne.uniforms["uLineColor5"].value = new THREE.Color(0x8a0505); //rouge

    this.pansements = this.couronneChildren.pansements.children[0].material =
      new THREE.ShaderMaterial(ToonShader3);

    this.pansements.uniforms["uDirLightPos"].value = new THREE.Vector3(
      0,
      0.13,
      0.97
    );
    this.pansements.uniforms["uAmbientLightColor"].value = new THREE.Color(
      0xff8000
    );

    this.pansements.uniforms["uLineColor1"].value = new THREE.Color(0xe7e1ca); //blanc OK
    this.pansements.uniforms["uLineColor2"].value = new THREE.Color(0xe4d9af); // jaune
    this.pansements.uniforms["uLineColor3"].value = new THREE.Color(0xeaca57); //jauneBase
    this.pansements.uniforms["uLineColor4"].value = new THREE.Color(0xd5755d); //orange
    this.pansements.uniforms["uLineColor5"].value = new THREE.Color(0x8a0505); //rouge
  }

  jColor() {
    this.j = this.couronneChildren.lej.children[0].material =
      new THREE.ShaderMaterial(ToonShaderBleu);

    this.j.uniforms["uDirLightPos"].value = new THREE.Vector3(0, 0.13, 0.97);
    this.j.uniforms["uAmbientLightColor"].value = new THREE.Color(0xff8000);

    this.j.uniforms["uLineColor1"].value = new THREE.Color(0xe5edf5); //blanc OK
    this.j.uniforms["uLineColor2"].value = new THREE.Color(0xd5e6f6); // jaune
    this.j.uniforms["uLineColor3"].value = new THREE.Color(0x9dc3ec); //jauneBase
    this.j.uniforms["uLineColor4"].value = new THREE.Color(0x354582); //orange
    this.j.uniforms["uLineColor5"].value = new THREE.Color(0x8a0505); //rouge
  }

  starColor() {
    this.star = this.couronneChildren.etoiles.material =
      new THREE.ShaderMaterial(ToonShaderEtoile);

    this.star.uniforms["uDirLightPos"].value = new THREE.Vector3(0, 0.13, 0.97);
    this.star.uniforms["uAmbientLightColor"].value = new THREE.Color(0xff8000);

    this.star.uniforms["uLineColor2"].value = new THREE.Color(0x99333d); // jaune
    this.star.uniforms["uLineColor3"].value = new THREE.Color(0x8a0505); //jauneBase
  }

  pincesColor() {
    this.pinces = this.couronneChildren.pinces.material =
      new THREE.ShaderMaterial(ToonShaderPinces);

    this.pinces.uniforms["uDirLightPos"].value = new THREE.Vector3(
      0,
      0.13,
      0.97
    );
    this.pinces.uniforms["uAmbientLightColor"].value = new THREE.Color(
      0xff8000
    );

    this.pinces.uniforms["uLineColor2"].value = new THREE.Color(0x8a0505); // jaune
    this.pinces.uniforms["uLineColor3"].value = new THREE.Color(0x260d0f); //jauneBase
  }

  pColor() {
    this.p = this.couronneChildren.lep.material = new THREE.ShaderMaterial(
      ToonShaderP
    );

    /*		this.star = this.couronneChildren.etoiles.material = new THREE.MeshPhongMaterial({
    	color: 0x8a0505,
		});*/

    /*	this.star.shininess = 300;*/

    this.p.uniforms["uDirLightPos"].value = new THREE.Vector3(0, 0.13, 0.97);
    this.p.uniforms["uAmbientLightColor"].value = new THREE.Color(0xff8000);

    this.p.uniforms["uLineColor1"].value = new THREE.Color(0x99333d); // bl
    this.p.uniforms["uLineColor2"].value = new THREE.Color(0x8a0505); // jaune
    this.p.uniforms["uLineColor3"].value = new THREE.Color(0x260d0f); //jauneBase
  }

  resize() {}

  update() {}
}
