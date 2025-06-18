gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import SplitType from "split-type";

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2.4,
  effects: true,
  // smoothTouch: 0.9,
});

let st = ScrollTrigger.create({
  trigger: ".trigger",
  pin: ".pin",
  start: "bottom center",
  end: "+=368",
  // markers: true,
});

let sous_titres;
let sous_titre_wrappers;

sous_titres = document.querySelectorAll(".sous-titre");
sous_titre_wrappers = document.querySelectorAll(".sous-titre-wrapper");

sous_titre_wrappers.forEach((sous_titre_wrapper) => {
  let item = sous_titre_wrapper.querySelector(".sous-titre");
  let text = item.innerHTML.trim().split("");
  var result = [];

  text.forEach(function (char) {
    result.push(char);
    // console.log(result);
  });

  const ourText = SplitType.create(item, { types: "chars" });
  const chars = ourText.chars;
  // console.log(ourText);
  console.log(chars);

  let tl = gsap.timeline({
    paused: "true",
    scrollTrigger: {
      trigger: sous_titre_wrapper,
      start: "top 92%",
      toggleActions: "restart none none reverse",
      // markers: true,
    },
  });

  gsap.set(chars, {
    y: 24,
    opacity: 0,
  });
  // tl.from(result, { opacity: 0 });
  tl.to(
    chars,
    {
      y: 0,
      stagger: { each: 0.05, from: "left" },
      duration: 0.2,
      ease: "sine.out",
    },
    0
  ).to(
    chars,
    {
      opacity: 1,
      stagger: { each: 0.05, from: "left" },
      duration: 0.4,
      ease: "expoScale(0.5,7,none)",
    },
    0
  );
});

console.log("girs");

let gris = document.querySelector("#other-drawin");
let croquis = document.querySelector("#croquis");

// gris.addEventListener("mouseenter", (event) => {
//   event.target.src = "./img/museeartquimper.png";
// });
// gris.addEventListener("mouseleave", (event) => {
//   event.target.src = "./img/MonaLisa.png";
// });

// croquis.addEventListener("mouseenter", (event) => {
//   event.target.src = "./img/distribution.png";
// });
// croquis.addEventListener("mouseleave", (event) => {
//   event.target.src = "./img/croquis.png";
// });

//For Firefox we have to handle it in JavaScript
var vids = $("video");
$.each(vids, function () {
  this.controls = false;
});
//Loop though all Video tags and set Controls as false

$("video").click(function () {
  //console.log(this);
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});

let project_holder = [];
let projects = [];
let arrow_left = [];
let arrow_right = [];

// console.log(project_holder);
// project_holder = document.querySelectorAll(".projet");
projects = document.querySelectorAll(".projets");
arrow_left = document.querySelectorAll(".arrow-left");
arrow_right = document.querySelectorAll(".arrow-right");
// project_close = document.querySelectorAll(".croix");

project_holder.forEach((solo_proj_holder, i) => {
  console.log(solo_proj_holder);
  console.log(i);

  solo_proj_holder.addEventListener("click", (event) => {
    const div1 = document.getElementById(`projet-${i}`);
    const divAND1 = document.getElementById(`projet-${i + 1}`);
    div1.classList.remove("display-none");
    div1.querySelector(".croix").addEventListener("click", () => {
      div1.classList.add("display-none");
    });
    // console.log(div1);
    // projects[]
  });

  let arr_holder_left = solo_proj_holder.querySelector(".arrow-left");

  // arr_holder_left.addEventListener("click", (event) => {
  //   if (i < arrow_left.length + 1) {
  //     const div1 = document.getElementById(`projet-${i}`);
  //     const divAND1 = document.getElementById(`projet-${i - 1}`);
  //     div1.classList.add("display-none");
  //     divAND1.classList.remove("display-none");
  //   }
  //   // console.log(div1);
  //   // projects[]
  // });
});

project_holder = document.querySelectorAll(".projet");

let projets_list = [];
for (let i = 0; i < projects.length; i++) {
  projets_list.push(document.querySelector(`#projet-${i}`));
}

let fond_projet = document.querySelector("#fond-projet");

gsap.set(projets_list, {
  opacity: 0,
  display: "none",
});

gsap.set(fond_projet, {
  opacity: 0,
  display: "none",
});

project_holder.forEach((holder, i) => {
  let projet = `#projet-${i}`;
  holder.addEventListener("click", (event) => {
    createFadeIn(fond_projet);
    createFadeIn(projet);
  });

  document
    .querySelector(projet)
    .querySelector(".croix")
    .addEventListener("click", () => {
      createFadeOut(projet);
      createFadeOut(fond_projet);
    });
});

function createFadeIn(projet) {
  let fadein = gsap.timeline();
  fadein
    .to(
      projet,
      {
        display: "block",
        duration: 0,
      },
      0
    )
    .to(
      projet,
      {
        autoAlpha: 1,
        opacity: 1,
        duration: 1.2,
        ease: "easeIn",
      },
      0
    );
}

function createFadeOut(projet) {
  let fadein = gsap.timeline();
  fadein
    .to(
      projet,
      {
        opacity: 0,
        autoAlpha: 0,
        duration: 1.2,
        ease: " easeOut",
      },
      0
    )
    .to(
      projet,
      {
        display: "none",
        duration: 0.01,
      },
      0
    );
}

projets_list.forEach((projet, i) => {
  console.log(projet);
  let left = projet.querySelector(".arrow-left");
  let right = projet.querySelector(".arrow-right");
  left.addEventListener("click", () => {
    if (i > 0) {
      createFadeOut(projets_list[i]);
      createFadeIn(projets_list[i - 1]);
      // projets_list[i - 1].classList.remove("display-none");
      // projets_list[i].classList.add("display-none");
    } else {
      createFadeIn(projets_list[3]);
      createFadeOut(projets_list[i]);

      // projets_list[3].classList.remove("display-none");
      // projets_list[i].classList.add("display-none");
    }
  });
  right.addEventListener("click", () => {
    //2 car il y a le fond noir qui est aussi un "projet"
    if (i < projets_list.length - 2) {
      createFadeOut(projets_list[i]);
      createFadeIn(projets_list[i + 1]);

      // projets_list[i + 1].classList.remove("display-none");
      // projets_list[i].classList.add("display-none");
    } else {
      createFadeOut(projets_list[i]);
      createFadeIn(projets_list[0]);

      // projets_list[i].classList.add("display-none");
    }
  });
});

// console.log(arrow_right);

// arrow_left.forEach((a_left, i) => {
//   a_left.addEventListener("click", (event) => {
//     if (i < arrow_left.length + 1) {
//       // const div1 = document.getElementById(`projet-${i}`);
//       // const divAND1 = document.getElementById(`projet-${i - 1}`);
//     }
//     alert(i);
//     projets_list[i].classList.add("display-none");
//     projets_list[i + 1].remove("display-none");
//     // console.log(div1);
//     // projects[]
//   });
// });

// arrow_right.forEach((a_right, i) => {
//   a_right.addEventListener("click", (event) => {
//     if (i < arrow_left.length + 1) {
//       const div1 = document.getElementById(`projet-${i}`);
//       const divAND1 = document.getElementById(`projet-${i + 1}`);
//       div1.classList.add("display-none");
//       // divAND1.classList.remove("display-none");
//       // // alert(divAND1);
//       alert(i);
//     }
//     // alert(i);

//     // console.log(div1);
//     // projects[]
//   });
// });
