import * as THREE from "three";
import Experience from "../Experience.js"; // .. sors de World (dossier)

import Couronne from "./Room.js";
import Environnement from "./Environnement.js";




export default class World {
	constructor() {
		this.experience = new Experience() ;
		this.sizes = this.experience.sizes ; // on passe par experience
		this.scene = this.experience.scene;
		this.canvas = this.experience.canvas;
		this.camera = this.experience.camera;
		this.renderer = this.experience.renderer;

		this.resources = this.experience.resources;

		this.resources.on("ready", () => {
			this.couronne = new Couronne(); //cela revient à prendre Couronne/Room pour scene.add(actualSceneCouronne)
			this.environnement = new Environnement();
	/*		this.renderer = this.renderer.pixelEffect();*/
			/*this.children = this.couronne.couronneChildren ; */// rendre les enfants accessibles partout NON
	/*		console.log(this.children);*/
		

		})


	}


	resize() {
	
	}

	update() {
		if(this.room) {
			this.room.update();
		}

		if(this.environnement) {
			this.environnement.update();
		}
	}

}