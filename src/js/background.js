import p5 from "p5";

// import CirclePath from "./circle.js";
// import Particle from "./particle.js";

let particles = [];
let rayon = 88;
let espace = rayon / 2;
let x, y;
let canvas;
let circles = [];
// let canvas_size = 600;
let canvas_size = 600;

let stroke = [];

let CenterPath, YPath, XPath, Y1Path, X1Path;

const sketch = (s) => {
  function canvasResize() {
    // canvas.position(s.windowWidth / 2 - canvas_size / 2, 0);
    // canvas.parent("fin");
    // https://www.youtube.com/watch?v=OIfEHD3KqCg
  }

  class CirclePath {
    constructor(r, pos) {
      this.r = r;
      this.pos = pos;
    }

    appear() {
      s.noFill();
      s.circle(this.pos.x, this.pos.y, this.r);
    }
  }

  class Particle {
    constructor(path) {
      //récupération du path pour refactoriser le code original
      this.path = path;
      this.rayon = path.r;

      //variation des particules
      this.size = s.random(1.5, 3.5);
      this.rand = s.random(0.6, 1);
      this.hue = Math.floor(s.random(150, 360));

      //disperion du départ -> distance par rapport au cercle
      this.diff = path.r / 2;
      this.dist = s.createVector(
        s.random(path.pos.x - this.diff, path.pos.x + this.diff),
        s.random(path.pos.y - this.diff, path.pos.y + this.diff)
      );

      // répartition le long de la sphère -> effet inverse avec le starter
      this.rep = 100;
      this.starter = s.random(-this.rep, this.rep);

      this.form = s.random(0.01, 0.02); //Distorsion du path originale, frétillements

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
      let constraint = 5; //vitss mapping
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
      // this.vel.limit(60);
      this.acc.mult(0); //clean
    }

    applyForce() {
      //attraction au centre du path + oscillation -> suit le path
      let dir = p5.Vector.sub(this.path.pos, this.pos);
      dir.normalize(); //échelle 1:1
      dir.mult(s.random(this.form)); //vitesse de formation

      this.acc.add(dir);
    }

    appear() {
      s.noStroke();
      s.fill(s.color(`hsla(${this.hue}, 80%, 45%, ${this.rand})`));
      s.circle(this.pos.x, this.pos.y, this.size);
    }
  }

  s.touchStarted = () => {
    // Paint over the background.
    background(200);

    // Mark each touch point once with a circle.
    for (let touch of touches) {
      circle(touch.x, touch.y, 40);
    }
  };

  s.setup = () => {
    canvas = s.createCanvas(canvas_size, 848);
    canvasResize();
    canvas.parent("fin");
    x = s.width / 2;
    y = s.height / 2;

    CenterPath = new CirclePath(rayon, s.createVector(x, y));
    YPath = new CirclePath(rayon, s.createVector(x, y - espace));
    XPath = new CirclePath(rayon, s.createVector(x + espace, y));
    Y1Path = new CirclePath(rayon, s.createVector(x, y + espace));
    X1Path = new CirclePath(rayon, s.createVector(x - espace, y));

    particles.push(new Particle(CenterPath));

    for (let i = 0; i < 24; i++) {
      particles.push(new Particle(CenterPath));
      particles.push(new Particle(YPath));
      particles.push(new Particle(Y1Path));
      particles.push(new Particle(X1Path));
      particles.push(new Particle(XPath));
    }

    let NewPath = new CirclePath(rayon * 2, s.createVector(x, y));
    for (let i = 0; i < 16; i++) {
      particles.push(new Particle(NewPath));
    }
  };

  s.draw = () => {
    s.background("#e2e2e2");

    particles.forEach((particle) => {
      particle.appear();
      particle.applyForce();
      particle.update();
    });
  };

  s.windowResized = () => {
    canvasResize();
  };
  const section_finale = document.querySelector("#fin");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          s.loop();
          // alert("loop");
        } else {
          s.noLoop();
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(section_finale);
};

const sketch_A = new p5(sketch, "one");
const sketch_B = new p5(sketch, "two");
