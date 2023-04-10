import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const navToggle = document.querySelector(".navbar__toggle-btn");
const navbar = document.querySelector(".navbar");
const subLinks = document.querySelectorAll(".menu__sub-links");
const menuLink = document.querySelectorAll(".menu__link");

navToggle.addEventListener("click", () => {
  navbar.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  navbar.toggleAttribute("data-visible");
});

menuLink.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    subLinks[index].style.height = "auto";
    subLinks[index].style.transform = "scaleY(1)";
  });

  item.addEventListener("mouseleave", () => {
    subLinks[index].style.height = 0;
    subLinks[index].style.transform = "scaleY(0)";
  });
});

subLinks.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    item.style.height = "auto";
    item.style.transform = "scaleY(1)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.height = 0;
    item.style.transform = "scaleY(0)";
  });
});

// animations

gsap.registerPlugin(ScrollTrigger);

gsap.from(".future__subtitle", {
  scrollTrigger: {
    trigger: ".future__subtitle",
    toggleActions: "restart none none none",
    start: "top center",
  },
  y: -50,
  opacity: 0,
  duration: 2,
});

gsap.from(".future__card", {
  scrollTrigger: {
    trigger: ".future__card",
    toggleActions: "restart none none none",
    start: "top center",
  },
  x: -100,
  opacity: 0,
  duration: 2,
});
gsap.from(".future__card-bg img", {
  scrollTrigger: {
    trigger: ".future__card-bg img",
    toggleActions: "restart none none none",
    start: "center center",
  },
  x: 500,
  opacity: 0,
  duration: 2,
});

let tl = gsap.timeline({ delay: 0.5 });

tl.from(".header", {
  y: -100,
  duration: 1,
  opacity: 0,
  ease: "ease",
});

tl.from(".banner__subtitle", {
  y: 50,
  duration: 1,
  opacity: 0,
  ease: "ease",
});

tl.from(".banner__description", {
  y: -50,
  duration: 1,
  opacity: 0,
  ease: "ease",
});

tl.from(".banner__buttons", {
  y: -100,
  duration: 1,
  opacity: 0,
  ease: "easeInOut",
});
