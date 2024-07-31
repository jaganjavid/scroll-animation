

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "0%",
        end: "+=150%",
        pin: ".wrapper",
        scrub: 1
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
      },
      "<"
    );
});
