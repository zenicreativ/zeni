$(document).ready(function () {
    ScrollTrigger.create({
      trigger: "header",
      start: "top 50%",
      end: "bottom 0%",
      onEnter: () => {
        gsap.to("body", { duration: 0.4, backgroundColor: "#aeb8fe" });
      },
      onLeaveBack: () => {
        gsap.to("body", { duration: 0.4, backgroundColor: "#ffffff" });
      },
    }),
      ScrollTrigger.create({
        trigger: "main",
        start: "top 50%",
        end: "bottom 0%",
        onEnter: () => {
          gsap.to("body", { duration: 0.4, backgroundColor: "#ffffff" });
        },
        onLeaveBack: () => {
          gsap.to("body", { duration: 0.4, backgroundColor: "#aeb8fe" });
        },
      }),
      ScrollTrigger.create({
        trigger: "footer",
        start: "top 90%",
        end: "bottom 0%",
        onEnter: () => {
          gsap.to("body", { duration: 0.4, backgroundColor: "#aeb8fe" });
        },
        onLeaveBack: () => {
          gsap.to("body", { duration: 0.4, backgroundColor: "#ffffff" });
        },
      }),
      new TimelineMax().fromTo(
        "nav",
        { y: -30, opacity: 0 },
        { y: 5, opacity: 1, duration: 1, ease: "power1.out" }
      ),
      ScrollOut({
        targets: "h1, h3, p, .img-wrapper, .project-wrapper",
        once: true
      });
  });
  