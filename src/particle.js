export default class Particle {
  constructor(path) {
    //récupération du path pour refactoriser le code original
    this.path = path;
    this.rayon = path.r;

    //variation des particules
    this.size = Math.random(2, 10);
    this.rand = Math.random(0.4, 1);

    //disperion du départ -> distance par rapport au cercle
    this.diff = path.r / 4 + 5;
    this.dist = createVector(
      random(path.pos.x - this.diff, path.pos.x + this.diff),
      random(path.pos.y - this.diff, path.pos.y + this.diff)
    );

    // répartition le long de la sphère -> effet inverse avec le starter
    this.rep = 50;
    this.starter = random(-this.rep, this.rep);

    this.form = random(1, 2.5); //vitesse de formation

    //mouvement
    this.pos = createVector(this.dist.x, this.dist.y);
    this.acc = createVector();
    this.vel = createVector();
    this.force = createVector();

    //mouse Interaction (dernier test)
    this.project = createVector();
  }

  update() {
    //test inversion de sens
    let constraint = 25; //vitss mapping
    let mousePosX = map(mouseX, constraint, width - constraint, -1, 1);
    // let mousePosY = map(mouseY, constraint, height-constraint, 1, -1);

    let amplitude = this.rayon / 2;

    let force = createVector(
      map(cos(this.starter), -1, 1, -amplitude, amplitude),
      map(sin(this.starter), -1, 1, -amplitude, amplitude)
    );
    // let force = createVector(map(cos(this.starter), -1, 1, amplitude*(-mousePosX) , amplitude*(mousePosX)),map(sin(this.starter), -1, 1, amplitude*(-mousePosX), amplitude*(mousePosX)));

    this.starter += 0.025 * mousePosX; //tourne dans le sens de la souris

    this.pos = force.copy().add(this.vel); //maintient la rotation -> vitesse constante
    this.pos.add(this.dist); //pos random de base à apply à la rotation

    this.vel.add(this.acc); //forme, attraction vers le cerlce
    this.acc.mult(0); //clean
  }

  applyForce() {
    //attraction au centre du path + oscillation -> suit le path
    let dir = p5.Vector.sub(this.path.pos, this.pos);
    dir.normalize(); //échelle 1:1
    dir.mult(random(this.form)); //vitesse de formation
    //Attire les particules
    this.acc.add(dir);
  }

  link(points) {
    for (let other of points) {
      let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (d < 15) {
        stroke(245);
        strokeWeight(map(d, 0, 150, 0.4, 0));
        line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      }
    }
  }

  display() {
    noStroke();
    fill(color(`hsla(${190}°, ${90}%, 44%, ${this.rand})`));
    circle(this.pos.x, this.pos.y, this.size);
  }

  projection() {
    //première piste (projection sur le texte)
    //permet de projeter le point sur le cercle objectif de le rejoindre
    fill("red");
    this.project = this.path.pos.copy();
    let dir = p5.Vector.sub(this.pos, this.project);
    // let mouse = createVector(mouseX, mouseY);
    // let dir = p5.Vector.sub(mouse, this.project);
    dir.normalize();
    dir.mult(this.path.r / 2);
    this.project.add(dir);

    fill("red");
    // circle(this.project.x,this.project.y,10);
    // noFill();
    // circle(this.project.x, this.project.y, path.r);

    // p5.Vector.dist(this.pos, this.project)
  }
}
