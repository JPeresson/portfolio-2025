/*import Experience from "./Experience.js"; inutile pas bonne place*/
import { EventEmitter } from "events"; //pas de ./ car dans node_modules et vite est là

export default class Time extends EventEmitter {
	constructor() {
		super(); // avec extends
		this.start = Date.now();
		this.current = this.start;
		this.elapsed = 0;
		this.delta = 16;

		this.update();

	}



	update() {
		const currentTime = Date.now();
		this.delta = currentTime - this.current; //délai
		this.current = currentTime ; // avant d'update à la même valeur
		this.elapsed = this.current - this.start ; // nivo final - début ok;
		
		/*console.log(this.delta);*/
		this.emit("update") ;//emission pour update la cam et le render (exp)
		window.requestAnimationFrame(()=> this.update()) ;//fin
		


	}

}