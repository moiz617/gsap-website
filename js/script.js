document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lenis
  const lenis = new Lenis();

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on("scroll", ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  gsap.to("#big-text-section h1", {
    transform: "translateX(-70%)",
    color: "black",
    scrollTrigger: {
      trigger: "#first-section",
      scroller: "body",
      start: "top 13%",
      scrub: 2,
    },
  });

  gsap.to("#first-image", {
    y: -50,
    scrollTrigger: {
      trigger: "#first-image img",
      scroller: "body",
      start: "top 13%",
      scrub: 2,
    },
  });

  gsap.to("#second-image", {
    y: -50,
    duration: 10,
    scrollTrigger: {
      trigger: "#second-image img",
      scroller: "body",
      start: "top 13%",
      scrub: 2,
    },
  });

  gsap.to("#fifth-image", {
    y: -50,
    duration: 10,
    scrollTrigger: {
      trigger: "#fifth-image img",
      scroller: "body",
      scrub: 2,
    },
  });

  gsap.to("#sixth-image", {
    y: -50,
    duration: 10,
    scrollTrigger: {
      trigger: "#sixth-image img",
      scroller: "body",
      scrub: 2,
    },
  });

  gsap.to("#cover-animate", {
    x: "105%",
    scrollTrigger: {
      trigger: "#cover-animate",
      scroller: "body",
      end: "top 20%",
      scrub: 2,
    },
  });
  gsap.to("#cover-animate-2", {
    x: "105%",
    scrollTrigger: {
      trigger: "#cover-animate-2",
      scroller: "body",
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.to("#article-1 h1", {
    y: -20,
    scrollTrigger: {
      trigger: "#article-1",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
    },
  });
  gsap.to("#article-1 button", {
    y: -20,
    scrollTrigger: {
      trigger: "#article-1",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
    },
  });

  gsap.to("#article-2 h1", {
    y: -20,
    scrollTrigger: {
      trigger: "#article-2",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
    },
  });
  gsap.to("#article-2 button", {
    y: -20,
    scrollTrigger: {
      trigger: "#article-2",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
    },
  });

  gsap.to("#article-3 h1", {
    y: -20,
    scrollTrigger: {
      trigger: "#article-3",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
    },
  });
  gsap.to("#article-3 button", {
    y: -20,
    scrollTrigger: {
      trigger: "#article-3",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
    },
  });

  gsap.to("#article-4 h1", {
    y: -20,
    scrollTrigger: {
      trigger: "#article-4",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
    },
  });
  gsap.to("#article-4 button", {
    y: -20,
    scrollTrigger: {
      trigger: "#article-4",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
    },
  });

  gsap.to("#article-5 h1", {
    y: -20,
    scrollTrigger: {
      trigger: "#article-5",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
    },
  });
  gsap.to("#article-5 button", {
    y: -20,
    scrollTrigger: {
      trigger: "#article-5",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
    },
  });

  gsap.to("#cover-animate-3", {
    x: "105%",
    scrollTrigger: {
      trigger: "#stats",
      scroller: "body",
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    },
  });
  gsap.to("#cover-animate-4", {
    x: "105%",
    scrollTrigger: {
      trigger: "#stats",
      scroller: "body",
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    },
  });
  gsap.to("#cover-animate-5", {
    x: "105%",
    scrollTrigger: {
      trigger: "#stats",
      scroller: "body",
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    },
  });
  gsap.to("#cover-animate-6", {
    x: "105%",
    scrollTrigger: {
      trigger: "#cover-animate-6",
      scroller: "body",
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.to("#cover-animate-7", {
    x: "105%",
    scrollTrigger: {
      trigger: "#cover-animate-7",
      scroller: "body",
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    },
  });

  // pin skills
  gsap.from("#pin-skills #skill-1", {
    scrollTrigger: {
      trigger: "#pin-skills",
      start: "top 15%",
      end: "top -400%",
      scrub: true,
      pin: true,
    },
  });
  gsap.from("#pin-skills #skill-2", {
    transform: "translateY(110%)",
    scrollTrigger: {
      trigger: "#pin-skills",
      start: "top 15%",
      end: "top -200%",
      scrub: true,
    },
  });
  gsap.from("#pin-skills #skill-3", {
    transform: "translateY(290%)",
    scrollTrigger: {
      trigger: "#pin-skills",
      start: "top 15%",
      end: "top -400%",
      scrub: true,
    },
  });

  // bold ideas animate
  gsap.from("#bold-idea-text1 h1", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
    scrollTrigger: {
      trigger: "#bold-idea-text1",
      scroller: "body",
      start: "top 70%",
    },
  });

  gsap.from("#bold-idea-text2 h1", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
    scrollTrigger: {
      trigger: "#bold-idea-text2",
      scroller: "body",
      start: "top 90%",
    },
  });

  gsap.from("#bold-idea-text3 h1", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
    scrollTrigger: {
      trigger: "#bold-idea-text3",
      scroller: "body",
      start: "top 90%",
    },
  });
});
