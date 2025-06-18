import * as THREE from "three";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import Sizes from "./Utils/Sizes.js"; //'.'' sur la même brance
import Time from "./Utils/Time.js";
import Resources from "./Utils/Ressources.js";
import assets from "./Utils/Asset.js"; // pour (assets)

import World from "./World/World.js"; //pour créer un monde qui gère la création des assets

export default class Experience {
	static instance
	constructor(canvas) { //Dire que le canvas arrive < class canvas de HTML
		if (Experience.instance) {
			return Experience.instance;
		}
		Experience.instance = this; //c'est le canvas experience
		this.canvas = canvas;
		this.sizes = new Sizes();
		this.scene = new THREE.Scene();

		this.time = new Time();
		this.camera = new Camera();
/*		console.log("hello");*/
		this.renderer = new Renderer(); // à la fin

		this.resources = new Resources(assets);
		this.world = new World();




		this.sizes.on("resize", () => { // écoute de size le resize
			this.resize(); // arrow fonction pour return

		});

		this.time.on("update", () => { //écoute de time l'update.
			this.update();
			
		});

	}


	resize() {
		this.camera.resize(); // lieu de resize écouté en continu
		this.world.resize();
		this.renderer.resize();

	}

	update() {
		this.camera.update(); // les updates plus tot 
		this.world.update(); // world va être le lieu des animations. 
		this.renderer.update();

	}
}


