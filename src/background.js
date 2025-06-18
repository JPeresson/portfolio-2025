import CirclePath from "./circle.js";
// import Particle from "./particle.js";

let particles = [];
let rayon = 240;
let espace = rayon / 2;
let x, y;
let canvas;
let circles = [];
// let canvas_size = 600;
let canvas_size = 600;

let stroke = [];

let CenterPath, YPath, XPath, Y1Path, X1Path;

const sketch = (s) => {
  class Stroke {
    constructor() {
      this.pos = s.createVector();
      this.r = 1;
    }

    display() {
      this.pos.set(mouseX, mouseY);
      s.circle(this.pos.x, this.pos.y);
    }
  }

  function canvasResize() {
    // canvas.position(s.windowWidth / 2 - canvas_size / 2, 0);
    canvas.parent("fin");
    // https://www.youtube.com/watch?v=OIfEHD3KqCg
  }
  class Particle {
    constructor(path) {
      //récupération du path pour refactoriser le code original
      this.path = path;
      this.rayon = path.r;

      //variation des particules
      this.size = s.random(1, 3);
      this.rand = s.random(0.25, 0.85);
      this.hue = Math.floor(s.random(140, 150));

      //disperion du départ -> distance par rapport au cercle
      this.diff = path.r / 4 + 5;
      this.dist = s.createVector(
        s.random(path.pos.x - this.diff, path.pos.x + this.diff),
        s.random(path.pos.y - this.diff, path.pos.y + this.diff)
      );

      // répartition le long de la sphère -> effet inverse avec le starter
      this.rep = 50;
      this.starter = s.random(-this.rep, this.rep);

      this.form = s.random(1, 1.25); //vitesse de formation

      //mouvement
      this.pos = s.createVector(this.dist.x, this.dist.y);
      this.acc = s.createVector();
      this.vel = s.createVector();
      this.force = s.createVector();

      //mouse Interaction (dernier test)
      this.project = s.createVector();
    }

    update() {
      //test inversion de sens
      let constraint = 25; //vitss mapping
      let mousePosX = s.map(s.mouseX, constraint, s.width - constraint, -1, 1);
      // let mousePosY = map(mouseY, constraint, height-constraint, 1, -1);

      let amplitude = this.rayon / 2;

      let force = s.createVector(
        s.map(s.cos(this.starter), -1, 1, -amplitude, amplitude),
        s.map(s.sin(this.starter), -1, 1, -amplitude, amplitude)
      );
      // let force = createVector(map(cos(this.starter), -1, 1, amplitude*(-mousePosX) , amplitude*(mousePosX)),map(sin(this.starter), -1, 1, amplitude*(-mousePosX), amplitude*(mousePosX)));

      this.starter += 0.016 * mousePosX; //tourne dans le sens de la souris

      this.pos = force.copy().add(this.vel); //maintient la rotation -> vitesse constante
      this.pos.add(this.dist); //pos random de base à apply à la rotation

      this.vel.add(this.acc); //forme, attraction vers le cerlce
      this.vel.limit(100);
      this.acc.mult(0); //clean
    }

    applyForce() {
      //attraction au centre du path + oscillation -> suit le path
      let dir = p5.Vector.sub(this.path.pos, this.pos);
      dir.normalize(); //échelle 1:1
      dir.mult(s.random(this.form)); //vitesse de formation
      //Attire les particules
      this.acc.add(dir);
    }

    link(points) {
      for (let other of points) {
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < 15) {
          s.stroke(245);
          s.strokeWeight(map(d, 0, 150, 0.4, 0));
          s.line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        }
      }
    }

    display() {
      s.noStroke();
      s.fill(s.color(`hsla(${this.hue}, 24%, 50%, ${this.rand})`));
      s.circle(this.pos.x, this.pos.y, this.size);
    }

    projection() {
      //première piste (projection sur le texte)
      //permet de projeter le point sur le cercle objectif de le rejoindre
      s.fill("red");
      this.project = this.path.pos.copy();
      let dir = p5.Vector.sub(this.pos, this.project);
      // let mouse = createVector(mouseX, mouseY);
      // let dir = p5.Vector.sub(mouse, this.project);
      dir.normalize();
      dir.mult(this.path.r / 2);
      this.project.add(dir);

      s.fill("red");
      // circle(this.project.x,this.project.y,10);
      // noFill();
      // circle(this.project.x, this.project.y, path.r);

      // p5.Vector.dist(this.pos, this.project)
    }
  }

  s.setup = () => {
    canvas = s.createCanvas(canvas_size, 700);
    canvasResize();
    x = s.width / 2;
    y = s.height / 2;

    CenterPath = new CirclePath(rayon, s.createVector(x, y));
    YPath = new CirclePath(rayon, s.createVector(x, y - espace));
    XPath = new CirclePath(rayon, s.createVector(x + espace, y));
    Y1Path = new CirclePath(rayon, s.createVector(x, y + espace));
    X1Path = new CirclePath(rayon, s.createVector(x - espace, y));

    canvas.push;
    // console.log(CenterPath);
    particles.push(new Particle(CenterPath));
    // console.log(particles);

    for (let i = 0; i < 150; i++) {
      particles.push(new Particle(CenterPath));
      particles.push(new Particle(YPath));
      particles.push(new Particle(Y1Path));
      particles.push(new Particle(X1Path));
      particles.push(new Particle(XPath));
    }

    let NewPath = new CirclePath(rayon * 2, s.createVector(x, y));
    for (let i = 0; i < 200; i++) {
      particles.push(new Particle(NewPath));
    }
  };

  s.draw = () => {
    // s.background(250, 246, 237);
    s.background(250, 246, 237, 0);
    s.background("#e2e2e2");
    // background("#111111");
    particles.forEach((particle) => {
      particle.display();
      particle.applyForce();
      particle.update();
      // particle.link(particles);
    });
  };

  s.windowResized = () => {
    canvasResize();
    // canvas.position(s.width - canvas_size, 0);
    // x = s.width / 2;
    // y = s.height / 2;
    // particles.forEach((particle) => {
    //   particle.applyMiddle();
    //   // particle.link(particles);
    // });
  };
};

const sketch_A = new p5(sketch, "one");
