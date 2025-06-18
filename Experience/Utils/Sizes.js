import * as THREE from "three";
import { EventEmitter } from "events";

export default class Sizes extends EventEmitter {
  constructor() {
    super();
    // this.width = window.innerWidth ;
    this.width = window.innerWidth / 6;
    this.height = "400";
    this.aspect = this.width / this.height;
    this.pixelRatio = Math.min(
      window.devicePixelRatio,
      2
    ); /*prendre le plus petit 1 ou 2*/

    window.addEventListener("resize", () => {
      this.width = window.innerWidth / 6;
      this.height = "400";
      this.aspect = this.width / this.height;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      this.emit("resize");
    });
  }
}
