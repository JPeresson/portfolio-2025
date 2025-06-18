export default class myClass {
  constructor(r, pos) {
    this.r = r;
    this.pos = pos;
  }

  display() {
    noFill();
    circle(this.pos.x, this.pos.y, this.r);
  }
}
