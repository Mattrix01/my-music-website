// toggle icon nav
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll active section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //remove icon nabar toggle
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed out JS
const typed = new Typed(".multiple-text", {
  strings: ["Music Producer", "Mixing Engineer", "Composer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// audio player
// const icon = document.getElementById("icon");
// const audio = new Audio("./audio/MattKnight-Drum&Bass-Showreel2023.mp3");
// let isPlaying = false;

// icon.addEventListener("click", () => {
//   if (isPlaying) {
//     audio.pause();
//     icon.src = "./images/play.png";
//     isPlaying = false;
//   } else {
//     audio.play();
//     icon.src = "./images/pause.png";
//     isPlaying = true;
//   }
// });

// audio player
const audio1 = new Audio("./audio/MattKnight-Drum&Bass-Showreel2023.mp3");

document.querySelectorAll(".song1").forEach((button) => {
  button.addEventListener("click", () => {
    audio1.play();
  });
});

// const audio2 = new Audio("./audio/father-song.mp3");

// document.querySelectorAll(".song2").forEach((button) => {
//   button.addEventListener("click", () => {
//     audio2.play();
//   });
// });
