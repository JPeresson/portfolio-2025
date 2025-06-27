import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import SplitType from "split-type"; //fonctionne

// alert("happy");
let timelines = [];

const mail_clipboard_icon = document.querySelector("#mail_clipboard_icon");
const mail_copie = document.querySelector("#mail_copie");
let mail = "jade.peresson@gmail.com";

const opacity = [1, 0.5, 0.255, 0.105];
const TOOKI_PAIRES = [];
const projet_showroom = document.querySelectorAll(".project-showroom");
const project_wrap = document.querySelectorAll(".project-wrap");
const project_wrapper_unique = document.querySelector("#projet-wrapper");

gsap.set(TOOKI_PAIRES, { opacity: 0 });

projet_showroom.forEach((projet_wrapper) => {
  const groupe_tooki = projet_wrapper.querySelectorAll(".tooki-showroom");
  TOOKI_PAIRES.push(groupe_tooki);
  gsap.set(groupe_tooki, { opacity: 0 });
});

project_wrapper_unique.addEventListener("mouseleave", () => {
  gsap.to(TOOKI_PAIRES, { opacity: 0, duration: 0.3 });
  // timelines.forEach((element) => {
  //   element.pause(0);
  // });
});

// project_wrapper_unique.addEventListener("mouseleave", () => {
//   project_wrap.forEach((projet, array_pos) => {
//     gsap.to(TOOKI_PAIRES, { opacity: 0, duration: 0.2 });
//   });
// });

project_wrap.forEach((projet, array_pos) => {
  projet.addEventListener("mouseenter", () => {
    const prior = gsap.timeline({ paused: true }).to(TOOKI_PAIRES[array_pos], {
      opacity: opacity[0],
      duration: 0.4,
      filter: "grayscale(0%)",
    });
    prior.play(0);
    timelines.push(prior);
    if (TOOKI_PAIRES[array_pos - 1]) {
      const prior_2 = gsap
        .timeline({ paused: true })
        .to(TOOKI_PAIRES[array_pos - 1], {
          opacity: opacity[1],
          duration: 0.4,
          filter: "grayscale(50%)",
        });
      prior_2.play(0);
      timelines.push(prior_2);
      if (TOOKI_PAIRES[array_pos - 2]) {
        const prior_3 = gsap
          .timeline({ paused: true })
          .to(TOOKI_PAIRES[array_pos - 2], {
            opacity: opacity[2],
            duration: 0.4,
            filter: "grayscale(80.5%)",
          });
        prior_3.play(0);
        timelines.push(prior_3);
        if (TOOKI_PAIRES[array_pos - 3]) {
          const prior_4 = gsap
            .timeline({ paused: true })
            .to(TOOKI_PAIRES[array_pos - 3], {
              opacity: opacity[3],
              duration: 0.4,
              filter: "grayscale(100%)",
            });
          timelines.push(prior_4);
          prior_4.play(0);
        }
      }
    } //remplacer par map

    gsap.to(
      TOOKI_PAIRES.find(
        (tooki_array_item, tooki_array_el_id) => tooki_array_el_id > array_pos
      ),
      { opacity: 0, duration: 0.2 }
    );
  });
});

mail_clipboard_icon.addEventListener("click", () => {
  writeClipboardText("jade.peresson@gmail.com");
});

gsap.set("#mail_copie", {
  autoAlpha: 0,
  opacity: 0,
  duration: 0,
  ease: "easeIn",
});

let mail_copie_pop = gsap
  .timeline({ paused: true })

  .to("#mail_copie", {
    autoAlpha: 1,
    opacity: 1,
    duration: 0.3,
    ease: "easeIn",
  })
  .to(
    "#mail_copie",
    { autoAlpha: 0, opacity: 0, duration: 0.4, ease: "easeIn" },
    "+=3"
  );

async function writeClipboardText(text) {
  try {
    await window.navigator.clipboard.writeText("jade.peresson@gmail.com");

    mail_clipboard_icon.style.opacity = "0.5";
    mail_copie_pop.play(0);
    setTimeout(() => {
      mail_clipboard_icon.style.opacity = "1";
      // mail_copie_pop.paused(0);
    }, "4000");
  } catch (error) {
    console.error(error.message);
    alert(error);
  }
}
const hide_menu = document.querySelector("#hide-menu");
const hide_menu_close = document.querySelector("#hide-menu-close");
const nav_wrapper = document.querySelector("#nav-wrapper");
const nav_menu_item = document.querySelectorAll("#nav-black-part a");

if (window.innerWidth < 800) {
  nav_menu_item.forEach((item) => {
    item.addEventListener("click", () => {
      hide_menu_close.classList.add("none");
      hide_menu.classList.remove("none");
      nav_wrapper.style.display = "none";
    });
  });
}

hide_menu_close.classList.add("none");

hide_menu.addEventListener("click", () => {
  hide_menu.classList.add("none");
  hide_menu_close.classList.remove("none");
  nav_wrapper.style.display = "block";
});

hide_menu_close.addEventListener("click", () => {
  hide_menu_close.classList.add("none");
  hide_menu.classList.remove("none");
  nav_wrapper.style.display = "none";
});

const three_js_section = document.querySelector("#scrollto-design");
const petit_mot = document.querySelector("#petit-mot");
// alert(three_js_section);
const observer_three = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".experience-canvas").classList.remove("none");

        // alert("loop");
      } else {
        document.querySelector(".experience-canvas").classList.add("none");
        // alert("noloop");
      }
    });
  },
  { threshold: 0 }
);

const observer_three_leave = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".experience-canvas").classList.add("none");

        // alert("loop");
      } else {
        document.querySelector(".experience-canvas").classList.remove("none");
        // alert("noloop");
      }
    });
  },
  { threshold: 1 }
);

observer_three.observe(three_js_section);
observer_three_leave.observe(petit_mot);

const croquis = document.querySelector(".croquis");
const photo = document.querySelector("#photo");
const images_card = document.querySelectorAll(".img-card");

let distanceColor = 400;
let distanceCroquis = 160;

document.addEventListener("mousemove", updateDisplay, false);

function updateDisplay(event) {
  // let mouseX = event.pageX;
  // let mouseY = event.pageY;
  let mouse_X = Math.round(event.clientX);
  let mouse_Y = Math.round(event.clientY);

  // CalculeDist(mouseX, mouseY, photo);
  // CalculeDist(mouseX, mouseY, dessin);

  CalculeDist(mouse_X, mouse_Y, croquis, distanceCroquis);

  CalculeDist(mouse_X, mouse_Y, photo, 650);
  images_card.forEach((img) => {
    CalculeDist(mouse_X, mouse_Y, img, distanceColor);
  });
}

function CalculeDist(mouse_X, mouse_Y, element, distance) {
  let elementX = Math.round(element.getBoundingClientRect().x);
  let elementY = Math.round(element.getBoundingClientRect().y);

  let originX = elementX + element.getBoundingClientRect().width / 2;
  let originY = elementY + element.getBoundingClientRect().height / 2;

  let distX = mouse_X - originX;
  let distY = mouse_Y - originY;

  if (
    distX < distance &&
    distY < distance &&
    distX > -distance &&
    distY > -distance
  ) {
    if (element.computedStyleMap().get("filter").value === "none") {
      // element.classList.add("opacity-1");
      element.classList.remove("opacity-0");
      // alert("opacity");
    } else {
      element.classList.add("saturate");
      // console.log(element);
      // console.log(distX);
      // console.log(distY);
      //undefined signifie staturate (pas d'accès d'ici à la valeur saturate(1))
    }
  } else {
    if (element.computedStyleMap().get("filter").value === "none") {
      element.classList.add("opacity-0");
      // console.log("none"); //none signifie photo  sinon j'aurais pu utiliser les classes (+ fort ici -> filter seul)
    } else {
      element.classList.remove("saturate");

      //undefined signifie staturate (pas d'accès d'ici à la valeur saturate(1))
    }
  }
}

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2.4,
  effects: true,
  smoothTouch: 0.8,
  speed: 1.2,
});

let st = ScrollTrigger.create({
  trigger: ".trigger",
  pin: ".pin",
  start: "bottom center",
  end: "+=368",
  // markers: true,
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

// console.log(project_holder);
project_holder.forEach((solo_proj_holder, i) => {
  // console.log(solo_proj_holder);
  // console.log(i);

  solo_proj_holder.addEventListener("click", (event) => {
    const div1 = document.getElementById(`projet-${i}`);
    const divAND1 = document.getElementById(`projet-${i + 1}`);
    div1.classList.remove("display-none");
    div1.querySelectorAll(".croix").addEventListener("click", () => {
      div1.classList.add("display-none");
    });
    alert(querySelectorAll(".croix"));
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

gsap.utils.toArray("nav a").forEach(function (button, i) {
  button.addEventListener("click", (e) => {
    var id = e.target.getAttribute("href");
    console.log(id);
    smoother.scrollTo(id, true, "top 80px");
    e.preventDefault();
  });
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

  let croix = document.querySelector(projet).querySelectorAll(".croix");
  croix.forEach((close) => {
    close.addEventListener("click", () => {
      createFadeOut(projet);
      createFadeOut(fond_projet);
    });
    //#endregion)  addEventListener("click", () => {
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
        duration: 0.4,
        ease: "easeIn",
      },
      0
    );
}

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

function createFadeOut(projet) {
  let fadeout = gsap.timeline();
  fadeout
    .to(
      projet,
      {
        opacity: 0,
        autoAlpha: 0,
        duration: 0.4,
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
      1
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
